import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Logo Link", () => {
  visualTestsFor("/logo-link.stories.tsx");
  a11yTestsFor("/logo-link.stories.tsx");
});
