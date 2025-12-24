import { test, expect, type Page } from "@playwright/test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import os from "node:os";
import AxeBuilder from "@axe-core/playwright";

type StoryEntry = {
  id: string;
  type: "story" | "docs";
  importPath: string;
  name: string;
};

type StoryIndex = {
  entries: Record<string, StoryEntry>;
};

const loadStories = (fileName: string): StoryEntry[] => {
  const indexPath = join(process.cwd(), "storybook-static", "index.json");
  const index = JSON.parse(readFileSync(indexPath, "utf8")) as StoryIndex;

  const stories = Object.values(index.entries).filter(
    (e) => e.type === "story" && e.importPath.endsWith(fileName),
  );

  if (stories.length === 0) {
    throw new Error(`No stories found for file: ${fileName}`);
  }

  return stories;
};

const openStory = async (page: Page, storyId: string): Promise<void> => {
  await page.goto(`/iframe.html?path=/story/${storyId}`);
};

export const visualTestsFor = (fileName: string): void => {
  const stories = loadStories(fileName);
  const osName = os.platform();

  for (const story of stories) {
    test(`visual — ${story.name}`, async ({ page, browserName }) => {
      await openStory(page, story.id);

      const root = page.locator("#storybook-root");
      await expect(root).toBeVisible();

      await expect(root).toHaveScreenshot(
        `visual/${osName}/${browserName}/${story.id}.png`,
      );
    });
  }
};

export const a11yTestsFor = (fileName: string): void => {
  const stories = loadStories(fileName);

  const IGNORED_RULES = [
    "landmark-one-main", // Storybook iframe doesn't include a <main> landmark, unrelated to component
    "page-has-heading-one", // Stories intentionally do not include <h1> headings
    "region", // Storybook wraps components outside semantic landmarks, not a component issue
  ];

  for (const story of stories) {
    test(`a11y — ${story.name}`, async ({ page }) => {
      await openStory(page, story.id);

      const results = await new AxeBuilder({ page }).analyze();

      const filtered = results.violations.filter(
        (v) => !IGNORED_RULES.includes(v.id),
      );

      expect(
        filtered,
        `Accessibility issues found in: ${story.id}\n${JSON.stringify(
          filtered,
          null,
          2,
        )}`,
      ).toEqual([]);
    });
  }
};
