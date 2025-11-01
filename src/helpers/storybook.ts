import type { Page } from "@playwright/test";

export const openStory = async (page: Page, storyId: string): Promise<void> => {
  await page.goto(`/iframe.html?path=/story/${storyId}`);
};
