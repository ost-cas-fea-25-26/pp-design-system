# Mumble Design System

[![Quality Check](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/quality-check.yaml/badge.svg)](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/quality-check.yaml)
[![Release](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/release-lib.yaml/badge.svg)](https://github.com/ost-cas-fea-25-26/pp-design-system/actions/workflows/release-lib.yaml)
[![npm version](https://img.shields.io/npm/v/@ost-cas-fea-25-26/pp-design-system.svg)](https://www.npmjs.com/package/@ost-cas-fea-25-26/pp-design-system)
[![License](https://img.shields.io/badge/license-TODO-lightgrey.svg)](#license)

A comprehensive React + Tailwind CSS v4 design system providing a collection of accessible, customizable, and production-ready UI components for the Mumble application.

---

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Available Components](#-available-components)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Scripts](#-scripts)
- [Configuration](#-configuration)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **🎨 Modern Design System**: Built with React 19 and Tailwind CSS v4
- **♿ Accessible Components**: Utilizing Radix UI primitives for accessibility
- **📦 Tree-shakeable**: ESM and CJS modules with optimized bundle sizes
- **🎭 Storybook Integration**: Interactive component documentation and testing
- **✅ Type-Safe**: Full TypeScript support
- **🧪 Well-Tested**: Comprehensive test coverage with Vitest
- **🎯 Form Validation**: React Hook Form integration with Zod validation
- **🌈 Icon Library**: Complete icon set using Lucide React
- **📱 Responsive**: Mobile-first design approach
- **🔧 Customizable**: Easy theming and style overrides

---

## 📦 Installation

Install the package via npm:

```bash
npm install @ost-cas-fea-25-26/pp-design-system
```

Or using other package managers:

```bash
# yarn
yarn add @ost-cas-fea-25-26/pp-design-system

# pnpm
pnpm add @ost-cas-fea-25-26/pp-design-system
```

### Requirements

- **Node.js**: >= 24.0.0
- **React**: >= 19.1.1
- **React DOM**: >= 19.1.1

---

## 🚀 Usage

### Basic Example

Import components and styles in your React application:

```tsx
import { Button } from "@ost-cas-fea-25-26/pp-design-system";
import "@ost-cas-fea-25-26/pp-design-system/styles";

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>
    </div>
  );
}
```

### Using Form Components

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Form } from "@ost-cas-fea-25-26/pp-design-system";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <Input name="email" label="Email" />
      <Input name="password" label="Password" type="password" />
    </Form>
  );
}
```

### Using Modal Component

```tsx
import { Modal, Button } from "@ost-cas-fea-25-26/pp-design-system";
import { useState } from "react";

function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onOpenChange={setOpen} title="Example Modal">
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

---

## 🧩 Available Components

The design system includes the following components:

### Core Components

- **Button** - Primary, secondary, and icon variants with different sizes
- **Button Bar** - Grouped button layouts
- **Icon Button** - Compact icon-only buttons
- **Timed Button** - Buttons with countdown timers
- **Link** - Styled anchor components

### Form Components

- **Input** - Text input with validation support
- **Textarea** - Multi-line text input
- **Label** - Form labels with accessibility
- **Form** - Form wrapper with React Hook Form integration
- **File Upload** - Drag-and-drop file upload with react-dropzone
- **Toggle** - On/off switch component

### Navigation & Layout

- **Tabs** - Tabbed navigation component
- **Modal** - Dialog/modal overlay

### Display Components

- **Avatar** - User avatar with image fallback
- **Avatar Button** - Clickable avatar component
- **Typography** - Text styles and headings
- **Colors** - Color palette and tokens
- **Icons** - Complete icon set (Lucide React)
- **Logos** - Mumble branding assets

---

## 🛠️ Tech Stack

### Core Dependencies

- **React** (^19.1.1) - UI library
- **Tailwind CSS** (^4.1.13) - Utility-first CSS framework
- **TypeScript** (~5.9.0) - Type safety

### UI Primitives

- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-label`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-tabs`
  - `@radix-ui/react-toggle`

### Form Handling

- **React Hook Form** (^7.64.0) - Form state management
- **Zod** (^4.1.12) - Schema validation
- **@hookform/resolvers** (^5.2.2) - Form validation resolvers

### Utilities

- **Lucide React** (^0.552.0) - Icon library
- **clsx** & **tailwind-merge** - Class name utilities
- **class-variance-authority** (^0.7.1) - Variant management
- **react-dropzone** (^14.3.8) - File upload handling

### Development Tools

- **Storybook** (^9.1.13) - Component documentation
- **Vitest** (^3.2.4) - Testing framework
- **ESLint** (^9.35.0) - Linting
- **Prettier** (^3.3.3) - Code formatting
- **Vite** (^7.1.6) - Build tool

---

## 💻 Development

### Prerequisites

Ensure you have Node.js >= 24.0.0 installed.

### Setup

1. Clone the repository:

```bash
git clone https://github.com/ost-cas-fea-25-26/pp-design-system.git
cd pp-design-system
```

2. Install dependencies:

```bash
npm install
```

3. Start Storybook for development:

```bash
npm run dev
```

This will start Storybook at `http://localhost:6006`.

### Building the Library

Build the library for distribution:

```bash
npm run build:lib
```

This creates both ESM and CJS builds in the `dist/` directory.

---

## 📜 Scripts

| Script                    | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| `npm run dev`             | Start Storybook development server on port 6006          |
| `npm run build:lib`       | Build the library (ESM + CJS)                            |
| `npm run build:storybook` | Build static Storybook site                              |
| `npm run lint`            | Run ESLint, TypeScript checks, and unused code detection |
| `npm run format`          | Format code with Prettier                                |
| `npm run test`            | Run test suite with Vitest                               |
| `npm run coverage`        | Generate test coverage report                            |
| `npm run type-check`      | Run TypeScript type checking                             |
| `npm run check:unused`    | Check for unused exports and dependencies                |

---

## ⚙️ Configuration

### Environment Variables

Currently, the project does not require environment variables for basic usage. Refer to `env.template` for any future configuration needs.

### Importing Styles

To use the design system's styles, import the CSS file in your application:

```tsx
import "@ost-cas-fea-25-26/pp-design-system/styles";
```

### TypeScript Configuration

The library provides TypeScript definitions out of the box. Both ESM and CJS type definitions are included:

- ESM types: `dist/esm/types/index.d.ts`
- CJS types: `dist/cjs/types/index.d.ts`

---

## 📚 Documentation

### Storybook

The component library is fully documented in Storybook, which includes:

- Interactive component examples
- Props documentation
- Accessibility guidelines
- Design tokens and branding

🔗 **[View Storybook Documentation](https://ost-cas-fea-25-26.github.io/pp-design-system/)**

### Changelog

For a detailed list of changes, see the [CHANGELOG.md](./CHANGELOG.md).

---

## 🤝 Contributing

<!-- TODO: Add detailed contribution guidelines if the repository is open for external contributions -->

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting and tests:
   ```bash
   npm run lint
   npm run test
   ```
5. Commit your changes (follows [Conventional Commits](https://www.conventionalcommits.org/))
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Quality

- All code must pass ESLint checks
- Maintain or improve test coverage
- Follow existing code style and patterns
- Write meaningful commit messages

### Release Process

Releases are automated using [Semantic Release](https://semantic-release.gitbook.io/):

- Commits to `main` trigger automatic versioning
- Changelog is automatically generated
- NPM package is published automatically
- GitHub releases are created with release notes

---

## 📄 License

<!-- TODO: Add license information once determined -->

License information is currently not specified. Please contact the repository owners for licensing details.

---

## 👥 Authors & Acknowledgments

**Organization**: [OST CAS FEA 25-26](https://github.com/ost-cas-fea-25-26)

**Repository**: [pp-design-system](https://github.com/ost-cas-fea-25-26/pp-design-system)

### Credits

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Accessibility primitives by [Radix UI](https://www.radix-ui.com/)

---

## 🔗 Links

- **NPM Package**: [@ost-cas-fea-25-26/pp-design-system](https://www.npmjs.com/package/@ost-cas-fea-25-26/pp-design-system)
- **Storybook**: [https://ost-cas-fea-25-26.github.io/pp-design-system/](https://ost-cas-fea-25-26.github.io/pp-design-system/)
- **GitHub**: [https://github.com/ost-cas-fea-25-26/pp-design-system](https://github.com/ost-cas-fea-25-26/pp-design-system)
- **Issues**: [Report a bug or request a feature](https://github.com/ost-cas-fea-25-26/pp-design-system/issues)

---

**Made with ❤️ for the Mumble project**
