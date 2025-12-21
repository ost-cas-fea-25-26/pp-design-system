import { test } from "@playwright/test";
import {
  a11yTestsFor,
  visualTestsFor,
} from "../../../../test/helpers/playwright";

test.describe("Mumble Detail View", () => {
  visualTestsFor("/mumble-detail-view.stories.tsx");
  a11yTestsFor("/mumble-detail-view.stories.tsx");
});
