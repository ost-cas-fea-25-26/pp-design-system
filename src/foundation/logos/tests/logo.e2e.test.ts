import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Logo", () => {
  visualTestsFor("/logo.stories.tsx");
});
