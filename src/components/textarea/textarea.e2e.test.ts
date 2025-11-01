import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Textarea", () => {
  visualTestsFor("/textarea.stories.tsx");
});
