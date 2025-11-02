import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Icons", () => {
  visualTestsFor("/icons.stories.tsx");
});
