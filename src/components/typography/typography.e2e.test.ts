import { test } from "@playwright/test";
import { visualTestsFor } from "../../../test/helpers/playwright";

test.describe("Typography", () => {
  visualTestsFor("/typography.stories.tsx");
});
