import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Avatar Button", () => {
  visualTestsFor("/avatar-button.stories.tsx");
});
