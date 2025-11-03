import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("UserInfo", () => {
  visualTestsFor("/user-info.stories.tsx");
});
