import { test, expect } from "@playwright/test";

test("Primary Button visual regression", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?path=/story/button--primary",
  );

  const button = page.getByRole("button", { name: "Primary Button" });
  await expect(button).toBeVisible();

  await expect(button).toHaveScreenshot("button-primary.png");
});
