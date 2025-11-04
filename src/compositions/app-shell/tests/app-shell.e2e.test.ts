import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("App Shell", () => {
  visualTestsFor("/app-shell.stories.tsx");
});
