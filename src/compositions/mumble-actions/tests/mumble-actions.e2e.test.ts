import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Mumble Actions", () => {
  visualTestsFor("/mumble-actions.stories.tsx");
  a11yTestsFor("/mumble-actions.stories.tsx");
});
