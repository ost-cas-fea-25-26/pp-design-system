import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("UploadImageModal", () => {
  visualTestsFor("/upload-image-modal.stories.tsx");
  a11yTestsFor("/upload-image-modal.stories.tsx");
});
