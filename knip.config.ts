import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/index.ts"],
  ignore: [
    ".prettier.config.js",
    ".storybook/**",
    "storybook-static/**",
    "release.config.js",
  ],
  ignoreDependencies: [
    "tailwindcss",
    "clsx",
    "lucide-react",
    "tw-animate-css",
    "@smartive/prettier-config",
    "prettier-plugin-tailwindcss",
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
  ignoreUnresolved: [".svg*"],
};

export default config;
