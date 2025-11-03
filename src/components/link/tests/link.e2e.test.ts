import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Link", () => {
  visualTestsFor("/link.stories.tsx");
  a11yTestsFor("/link.stories.tsx");
});
