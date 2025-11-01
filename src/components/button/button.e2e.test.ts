import { test } from "@playwright/test";
import { visualTestsFor } from "@/helpers/playwright";

test.describe("Button visual tests", () => {
  visualTestsFor("./src/components/button/button.stories.tsx");
});
