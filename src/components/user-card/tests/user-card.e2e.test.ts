import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("UserCard", () => {
  visualTestsFor("/user-card.stories.tsx");
});
