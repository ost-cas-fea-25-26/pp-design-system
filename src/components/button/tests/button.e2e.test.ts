import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Button", () => {
  visualTestsFor("/button.stories.tsx");
  a11yTestsFor("/button.stories.tsx");
});
