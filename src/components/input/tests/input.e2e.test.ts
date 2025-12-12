import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Input", () => {
  visualTestsFor("/input.stories.tsx");
  a11yTestsFor("/input.stories.tsx");
});
