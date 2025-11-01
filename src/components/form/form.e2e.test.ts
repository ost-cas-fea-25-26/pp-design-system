import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Form", () => {
  visualTestsFor("/form.stories.tsx");
});
