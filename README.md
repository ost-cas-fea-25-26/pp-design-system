<p align="center">
  <img src="./src/assets/logo/stacked-gradient.svg" width="120" alt="Mumble Logo" />
</p>

# PP Design System

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=putt-and-push_pp-design-system&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=putt-and-push_pp-design-system)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=putt-and-push_pp-design-system&metric=coverage)](https://sonarcloud.io/summary/new_code?id=putt-and-push_pp-design-system)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=putt-and-push_pp-design-system&metric=bugs)](https://sonarcloud.io/summary/new_code?id=putt-and-push_pp-design-system)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=putt-and-push_pp-design-system&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=putt-and-push_pp-design-system)
[![Quality Check](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/quality-check.yaml/badge.svg)](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/quality-check.yaml)
[![Release](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/release-lib.yaml/badge.svg)](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/release-lib.yaml)
[![Vercel Deploy](https://img.shields.io/badge/vercel-live-000?logo=vercel)](https://pp-design-system.vercel.app/)
![npm downloads](https://img.shields.io/npm/dm/@ost-cas-fea-25-26/pp-design-system)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@ost-cas-fea-25-26/pp-design-system)](https://bundlephobia.com/package/@ost-cas-fea-25-26/pp-design-system)
![types](https://img.shields.io/badge/types-TypeScript-blue)
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

## 🔗 Storybook

### Production Storybook

https://pp-design-system.vercel.app/

### Preview Deployments (per PR)

Every Pull Request gets a live Storybook preview automatically via Vercel.

> ✅ Shared via bot comment — no manual setup or tokens required.

---

## Installation (Next.js)

Install and import the styles once (e.g. in `app/layout.tsx`):

```bash
npm install @ost-cas-fea-25-26/pp-design-system
```

```tsx
import "@ost-cas-fea-25-26/pp-design-system/styles";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["500", "600", "700"] });
```

Importing `styles` provides the design tokens; use `next/font/google` to load fonts in Next.js.

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

## 🔧 Tech Stack

| Area           | Tool                     |
| -------------- | ------------------------ |
| UI Framework   | React + TailwindCSS      |
| Documentation  | Storybook (Vite)         |
| Unit Testing   | Vitest + Testing Library |
| Visual Testing | Playwright               |
| Build System   | TypeScript + tsc         |
| Release        | Semantic Release         |
| CI             | GitHub Actions           |

---

## 📚 References

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
- [Semantic Release](https://semantic-release.gitbook.io/)
