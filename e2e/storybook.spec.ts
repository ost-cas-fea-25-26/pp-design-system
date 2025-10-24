import { test, expect } from '@playwright/test';

// List of all story files and their exported stories
const stories = [
  { component: 'avatar', stories: ['Default', 'FallbackOnly', 'WithBorder', 'XL', 'Editable'] },
  { component: 'button', stories: ['Primary', 'Neutral', 'Gradient', 'WithLabelAndCustomSVG', 'Circular', 'FullWidth'] },
  { component: 'button-bar', stories: ['Default'] },
  { component: 'colors', stories: ['Default'] },
  { component: 'form', stories: ['Default'] },
  { component: 'icons', stories: ['Icons'] },
  { component: 'input', stories: ['Default', 'Email', 'Password', 'Disabled', 'Error', 'WithIcon', 'WithDefaultValue'] },
  { component: 'label', stories: ['Default', 'Disabled', 'Error'] },
  { component: 'link', stories: ['Default', 'AsChild'] },
  { component: 'modal', stories: ['Default'] },
  { component: 'textarea', stories: ['Default', 'WithValue', 'Disabled', 'Error', 'WithIcon', 'LongText'] },
  { component: 'timed-button', stories: ['Default'] },
  { component: 'toggle', stories: ['Default', 'Accent', 'Metric'] },
  { component: 'typography', stories: ['Default'] },
];

for (const { component, stories: componentStories } of stories) {
  test.describe(`${component} component`, () => {
    for (const story of componentStories) {
      test(`${story} story visual regression`, async ({ page }) => {
        // Navigate to the specific story
        await page.goto(`/iframe.html?id=${component}--${story.toLowerCase()}&viewMode=story`);
        
        // Wait for the story to be fully loaded
        await page.waitForLoadState('networkidle');
        
        // Add a small delay to ensure all animations/transitions are complete
        await page.waitForTimeout(500);
        
        // Take a screenshot and compare with baseline
        await expect(page).toHaveScreenshot(`${component}-${story}.png`, {
          fullPage: true,
          animations: 'disabled',
        });
      });
    }
  });
}
