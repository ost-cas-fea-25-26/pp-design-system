import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Textarea", () => {
  visualTestsFor("/textarea.stories.tsx");
  a11yTestsFor("/textarea.stories.tsx");
});
