import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Tabs", () => {
  visualTestsFor("/tabs.stories.tsx");
  a11yTestsFor("/tabs.stories.tsx");
});
