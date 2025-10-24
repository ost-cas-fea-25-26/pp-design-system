# End-to-End Testing with Playwright

This directory contains Playwright end-to-end tests for the Storybook stories in the design system.

## Overview

The tests automatically capture screenshots of each story and perform visual regression testing by comparing them with baseline screenshots.

## Running Tests

### Prerequisites

Install dependencies:
```bash
npm ci
```

Install Playwright browsers:
```bash
npx playwright install --with-deps chromium
```

### Run Tests

Run all tests:
```bash
npm run test:e2e
```

Run tests in UI mode (interactive):
```bash
npm run test:e2e:ui
```

### Updating Baseline Screenshots

When you intentionally change the UI and need to update the baseline screenshots:

```bash
npm run test:e2e:update
```

This will update all baseline screenshots in the `e2e/storybook.spec.ts-snapshots/` directory.

## How It Works

1. The Playwright configuration (`playwright.config.ts`) starts the Storybook dev server automatically
2. Each test navigates to a specific story in Storybook
3. A screenshot is captured and compared with the baseline
4. If differences are detected, the test fails and shows the diff

## CI/CD Integration

The GitHub Actions workflow (`.github/workflows/playwright.yml`) runs these tests automatically on:
- Pull requests
- Pushes to main branch

The first run will create baseline screenshots. Subsequent runs will compare against these baselines.

## Test Structure

The test file `storybook.spec.ts` contains a list of all components and their stories. When adding new stories:

1. Add the story to your component's `.stories.tsx` file
2. Update the `stories` array in `storybook.spec.ts` to include the new story
3. Run `npm run test:e2e:update` to create baseline screenshots

## Troubleshooting

### Tests failing with screenshot differences

If tests fail due to screenshot differences:

1. Review the diff images in the test report
2. If the changes are intentional, update baselines with `npm run test:e2e:update`
3. If the changes are unintentional, fix the code

### Flaky tests

If tests are flaky due to animations or timing issues:
- The tests already disable animations and wait for network idle
- Adjust the timeout in `storybook.spec.ts` if needed
