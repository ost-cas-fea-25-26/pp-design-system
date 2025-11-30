import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("UserInfo", () => {
  visualTestsFor("/user-info.stories.tsx");
  a11yTestsFor("/user-info.stories.tsx");
});
