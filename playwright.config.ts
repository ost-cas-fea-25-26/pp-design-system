import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src",
  testMatch: ["**/*.e2e.test.ts"],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? "50%" : undefined,
  snapshotDir: "snapshots",
  snapshotPathTemplate:
    "{testDir}/{testFileDir}/__screenshots__/{projectName}/{testName}{ext}",

  reporter: [["html", { open: "never" }]],

  use: {
    baseURL: "http://localhost:6006",
    trace: "on-first-retry",
  },

  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.005,
      animations: "disabled",
    },
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],

  webServer: {
    command:
      "npm run build:storybook && npx http-server storybook-static -p 6006 --silent",
    url: "http://localhost:6006",
    timeout: 60_000,
    reuseExistingServer: !process.env.CI,
  },
});
