import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Toaster", () => {
  visualTestsFor("/toaster.stories.tsx");
  a11yTestsFor("/toaster.stories.tsx");
});
