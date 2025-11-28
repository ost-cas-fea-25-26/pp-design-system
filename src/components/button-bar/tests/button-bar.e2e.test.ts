import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Button Bar", () => {
  visualTestsFor("/button-bar.stories.tsx");
  a11yTestsFor("/button-bar.stories.tsx");
});
