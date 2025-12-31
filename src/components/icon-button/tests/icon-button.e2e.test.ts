import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Icon Button", () => {
  visualTestsFor("/icon-button.stories.tsx");
  a11yTestsFor("/icon-button.stories.tsx");
});
