import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Modal", () => {
  visualTestsFor("/modal.stories.tsx");
  a11yTestsFor("/modal.stories.tsx");
});
