import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Tabs", () => {
  visualTestsFor("/tabs.stories.tsx");
});
