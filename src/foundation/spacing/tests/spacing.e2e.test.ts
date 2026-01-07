import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Spacing", () => {
  visualTestsFor("/spacing.stories.tsx");
});
