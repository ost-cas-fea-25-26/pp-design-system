import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Timed Button", () => {
  visualTestsFor("/timed-button.stories.tsx");
  a11yTestsFor("/timed-button.stories.tsx");
});
