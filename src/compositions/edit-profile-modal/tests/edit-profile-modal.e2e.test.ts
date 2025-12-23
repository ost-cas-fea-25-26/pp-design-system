import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("EditProfileModal", () => {
  visualTestsFor("/edit-profile-modal.stories.tsx");
  a11yTestsFor("/edit-profile-modal.stories.tsx");
});
