<p align="center">
  <img src="./src/assets/logo/stacked-gradient.svg" width="120" alt="Mumble Logo" />
</p>

# PP Design System

<p align="center">
  <img src="public/mumble-logo.svg" alt="Mumble Logo" width="120" />
</p>

# PP Design System

[![Quality Check](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/quality-check.yaml/badge.svg)](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/quality-check.yaml)
[![Deploy Storybook](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/deploy-storybook.yml)
[![Release](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/release-lib.yaml/badge.svg)](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/release-lib.yaml)
![npm downloads](https://img.shields.io/npm/dm/@ost-cas-fea-25-26/pp-design-system)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@ost-cas-fea-25-26/pp-design-system)](https://bundlephobia.com/package/@ost-cas-fea-25-26/pp-design-system)
![types](https://img.shields.io/badge/types-TypeScript-blue)
[![Storybook](https://img.shields.io/badge/storybook-online-ff4785)](https://ost-cas-fea-25-26.github.io/pp-design-system/)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4)
![ESLint](https://img.shields.io/badge/lint-eslint-blue)
![Conventional Commits](https://img.shields.io/badge/commits-conventional-ff8c00)
![Semantic Release](https://img.shields.io/badge/release%20automation-active-brightgreen)
![Maintained](https://img.shields.io/badge/maintained-yes-brightgreen)
![Node version](https://img.shields.io/badge/node-%3E%3D24-blue)
![Issues](https://img.shields.io/github/issues/ost-cas-fea-25-26/pp-design-system)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

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