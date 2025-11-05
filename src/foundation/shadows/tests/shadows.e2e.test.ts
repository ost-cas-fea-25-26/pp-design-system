import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Shadows", () => {
  visualTestsFor("/shadows.stories.tsx");
});
