import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Icon Button", () => {
  visualTestsFor("/icon-button.stories.tsx");
});
