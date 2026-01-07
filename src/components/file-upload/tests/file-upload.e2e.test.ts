import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("File Upload", () => {
  visualTestsFor("/file-upload.stories.tsx");
  a11yTestsFor("/file-upload.stories.tsx");
});
