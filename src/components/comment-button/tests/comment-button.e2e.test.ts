import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Comment Button", () => {
  visualTestsFor("/comment-button.stories.tsx");
  a11yTestsFor("/comment-button.stories.tsx");
});
