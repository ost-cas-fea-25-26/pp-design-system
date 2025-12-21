import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Reply form", () => {
  visualTestsFor("/reply-form.stories.tsx");
  a11yTestsFor("/reply-form.stories.tsx");
});
