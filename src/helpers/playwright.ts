import { test, expect, type Page } from "@playwright/test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import os from "node:os";

type StoryEntry = {
  id: string;
  type: "story" | "docs";
  importPath: string;
  name: string;
};

type StoryIndex = {
  entries: Record<string, StoryEntry>;
};

const openStory = async (page: Page, storyId: string): Promise<void> => {
  await page.goto(`/iframe.html?path=/story/${storyId}`);
};

export const visualTestsFor = (fileName: string): void => {
  const indexPath = join(process.cwd(), "storybook-static", "index.json");
  const index = JSON.parse(readFileSync(indexPath, "utf8")) as StoryIndex;

  const stories = Object.values(index.entries).filter(
    (e) => e.type === "story" && e.importPath.endsWith(fileName),
  );

  if (stories.length === 0) {
    throw new Error(`No stories found for file: ${fileName}`);
  }

  const osName = os.platform();

  for (const story of stories) {
    test(`${story.name}`, async ({ page, browserName }) => {
      await openStory(page, story.id);

      const root = page.locator("#storybook-root");
      await expect(root).toBeVisible();

      await expect(root).toHaveScreenshot(
        `visual/${osName}/${browserName}/${story.id}.png`,
      );
    });
  }
};
