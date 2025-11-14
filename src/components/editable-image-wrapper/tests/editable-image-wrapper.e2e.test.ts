import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Editable Image Wrapper", () => {
  visualTestsFor("/editable-image-wrapper.stories.tsx");
  a11yTestsFor("/editable-image-wrapper.stories.tsx");
});
