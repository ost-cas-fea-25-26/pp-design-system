import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Toggle", () => {
  visualTestsFor("/toggle.stories.tsx");
  a11yTestsFor("toggle.stories.tsx");
});
