import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Header", () => {
  visualTestsFor("/header.stories.tsx");
  a11yTestsFor("/header.stories.tsx");
});
