import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Mumble form", () => {
  visualTestsFor("/mumble-form.stories.tsx");
  a11yTestsFor("/mumble-form.stories.tsx");
});
