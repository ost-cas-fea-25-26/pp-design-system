import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Mumble", () => {
  visualTestsFor("/mumble.stories.tsx");
  a11yTestsFor("/mumble.stories.tsx");
});
