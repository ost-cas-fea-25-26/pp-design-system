import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Colors", () => {
  visualTestsFor("/colors.stories.tsx");
});
