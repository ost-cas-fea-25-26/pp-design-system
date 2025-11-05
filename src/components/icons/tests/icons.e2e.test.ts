import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Icons", () => {
  visualTestsFor("/icons.stories.tsx");
  a11yTestsFor("/icons.stories.tsx");
});
