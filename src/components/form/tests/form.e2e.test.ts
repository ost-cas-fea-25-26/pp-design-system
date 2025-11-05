import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Form", () => {
  visualTestsFor("/form.stories.tsx");
  a11yTestsFor("/form.stories.tsx");
});
