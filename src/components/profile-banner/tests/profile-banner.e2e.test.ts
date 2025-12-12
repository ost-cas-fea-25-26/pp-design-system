import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Profile Banner", () => {
  visualTestsFor("/profile-banner.stories.tsx");
  a11yTestsFor("/profile-banner.stories.tsx");
});
