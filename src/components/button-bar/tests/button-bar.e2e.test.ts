import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Button Bar", () => {
  visualTestsFor("/button-bar.stories.tsx");
});
