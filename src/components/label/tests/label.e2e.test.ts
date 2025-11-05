import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Label", () => {
  visualTestsFor("/label.stories.tsx");
  a11yTestsFor("/label.stories.tsx");
});
