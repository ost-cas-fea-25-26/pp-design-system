import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("Radius", () => {
  visualTestsFor("/radius.stories.tsx");
});
