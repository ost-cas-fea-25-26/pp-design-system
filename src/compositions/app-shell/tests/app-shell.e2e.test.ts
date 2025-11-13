import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("App Shell", () => {
  visualTestsFor("/app-shell.stories.tsx");
  a11yTestsFor("/app-shell.stories.tsx");
});
