import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Label", () => {
  visualTestsFor("/label.stories.tsx");
});
