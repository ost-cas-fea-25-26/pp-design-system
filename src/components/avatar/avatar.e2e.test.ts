import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Avatar", () => {
  visualTestsFor("/avatar.stories.tsx");
});
