import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Profile Header", () => {
  visualTestsFor("/profile-header.stories.tsx");
  a11yTestsFor("/profile-header.stories.tsx");
});
