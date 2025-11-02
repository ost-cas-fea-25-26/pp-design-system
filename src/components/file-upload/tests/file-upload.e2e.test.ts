import { test } from "@playwright/test";
import { visualTestsFor } from "../../../../test/helpers/playwright";

test.describe("File Upload", () => {
  visualTestsFor("/file-upload.stories.tsx");
});
