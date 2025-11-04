import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Header", () => {
  visualTestsFor("/header.stories.tsx");
});
