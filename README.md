<p align="center">
  <img src="./src/assets/logo/stacked-gradient.svg" width="80" alt="Mumble Logo" />
</p>

# PP Design System

[![CI Status](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/quality-check.yml/badge.svg)](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/quality-check.yml)
[![npm version](https://img.shields.io/npm/v/@ost-cas-fea-25-26/pp-design-system)](https://www.npmjs.com/package/@ost-cas-fea-25-26/pp-design-system)
[![Coverage](https://img.shields.io/badge/coverage-❓%25-yellowgreen)](https://github.com/ost-cas-fea-25-26/pp-design-system)
[![Storybook](https://img.shields.io/badge/storybook-online-blue)](https://ost-cas-fea-25-26.github.io/pp-design-system/)
[![Semantic Release](https://img.shields.io/badge/release%20automation-active-brightgreen)](https://github.com/ost-cas-fea-25-26/pp-design-system)
[![Node version](https://img.shields.io/badge/node-%3E%3D24-blue)](https://nodejs.org/)

---

## 🚀 Features

- Component library with React, TypeScript & TailwindCSS
- Storybook-based documentation and previews
- Unit tests with Vitest and enforced coverage
- Visual regression tests with Playwright
- Automated CI: linting, building, testing, and publish
- Reusable design system for web applications

---

## 📦 Installation

```bash
npm install @ost-cas-fea-25-26/pp-design-system
```

Use components:

```tsx
import { Button } from "@ost-cas-fea-25-26/pp-design-system";
import "@ost-cas-fea-25-26/pp-design-system/styles";
```

---

## 🛠️ Development

```bash
npm install
npm run dev             # Launch Storybook
npm run build:lib       # Build library code
npm run build:storybook # Build Storybook static site
```

### Unit Tests

```bash
npm run test:unit
npm run test:unit:coverage
```

### Visual / E2E Tests

```bash
npm run test:e2e           # Run Playwright tests
npm run test:e2e:update    # Regenerate snapshots via Docker
npm run test:e2e:ui        # Playwright UI runner
```
---

## 📚 Storybook

Run locally:

```bash
npm run dev
```

Live demo: [https://ost-cas-fea-25-26.github.io/pp-design-system/](https://ost-cas-fea-25-26.github.io/pp-design-system/)

---

## 🔧 Tech Stack

| Area           | Tool                              |
|----------------|-----------------------------------|
| UI Framework   | React + TailwindCSS                |
| Documentation  | Storybook (Vite)                   |
| Unit Testing   | Vitest + Testing Library           |
| Visual Testing | Playwright                         |
| Build System   | TypeScript + tsc                   |
| Release        | Semantic Release                   |
| CI             | GitHub Actions                     |

---

## 📚 References

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
- [Semantic Release](https://semantic-release.gitbook.io/)  