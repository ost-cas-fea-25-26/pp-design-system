import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Timed Button", () => {
  visualTestsFor("/timed-button.stories.tsx");
});
