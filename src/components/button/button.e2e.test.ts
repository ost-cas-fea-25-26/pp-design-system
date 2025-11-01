import { test, expect } from "@playwright/test";
import { openStory } from "@/helpers/storybook";

test.describe("Button — visual regression", () => {
  test("Primary", async ({ page }) => {
    await openStory(page, "button--primary");
    const button = page.getByRole("button", { name: "Primary Button" });
    await expect(button).toBeVisible();
    await expect(button).toHaveScreenshot("button-primary.png");
  });

  test("Neutral", async ({ page }) => {
    await openStory(page, "button--neutral");
    const button = page.getByRole("button", { name: "Neutral Button" });
    await expect(button).toBeVisible();
    await expect(button).toHaveScreenshot("button-neutral.png");
  });

  test("Light", async ({ page }) => {
    await openStory(page, "button--light");
    const button = page.getByRole("button", { name: "Light Button" });
    await expect(button).toBeVisible();
    await expect(button).toHaveScreenshot("button-light.png");
  });

  test("Gradient", async ({ page }) => {
    await openStory(page, "button--gradient");
    const button = page.getByRole("button", { name: "Gradient Button" });
    await expect(button).toBeVisible();
    await expect(button).toHaveScreenshot("button-gradient.png");
  });

  test("With Label + Icon", async ({ page }) => {
    await openStory(page, "button--with-label-and-custom-svg");
    const button = page.getByRole("button", { name: /with label/i });
    await expect(button).toBeVisible();
    await expect(button).toHaveScreenshot("button-with-label-icon.png");
  });

  test("Circular", async ({ page }) => {
    await openStory(page, "button--circular");
    const button = page.getByRole("button");
    await expect(button).toBeVisible();
    await expect(button).toHaveScreenshot("button-circular.png");
  });

  test("Full Width", async ({ page }) => {
    await openStory(page, "button--full-width");
    const button = page.getByRole("button", { name: "Full Width Button" });
    await expect(button).toBeVisible();
    await expect(button).toHaveScreenshot("button-full-width.png");
  });
});
