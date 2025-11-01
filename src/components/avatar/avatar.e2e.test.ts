import { test } from "@playwright/test";
import { a11yTestsFor, visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Avatar", () => {
  visualTestsFor("/avatar.stories.tsx");
  a11yTestsFor("/avatar.stories.tsx");
});
