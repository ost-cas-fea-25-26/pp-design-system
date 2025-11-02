import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Modal", () => {
  visualTestsFor("/modal.stories.tsx");
});
