import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Mumble submission", () => {
  visualTestsFor("/mumble-submission.stories.tsx");
  a11yTestsFor("/mumble-submission.stories.tsx");
});
