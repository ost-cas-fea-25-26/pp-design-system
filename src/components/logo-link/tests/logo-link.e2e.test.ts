import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Logo Link", () => {
  visualTestsFor("/logo-link.stories.tsx");
});
