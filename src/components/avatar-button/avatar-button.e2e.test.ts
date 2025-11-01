import { test } from "@playwright/test";
import { a11yTestsFor, visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Avatar Button", () => {
  visualTestsFor("/avatar-button.stories.tsx");
  a11yTestsFor("/avatar-button.stories.tsx");
});
