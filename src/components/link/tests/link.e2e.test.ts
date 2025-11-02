import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Link", () => {
  visualTestsFor("/link.stories.tsx");
});
