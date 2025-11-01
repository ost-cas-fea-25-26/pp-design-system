import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Input", () => {
  visualTestsFor("/input.stories.tsx");
});
