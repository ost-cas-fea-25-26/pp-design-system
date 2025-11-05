import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("UserCard", () => {
  visualTestsFor("/user-card.stories.tsx");
  a11yTestsFor("/user-card.stories.tsx");
});
