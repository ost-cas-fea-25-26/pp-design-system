import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Toggle", () => {
  visualTestsFor("/toggle.stories.tsx");
});
