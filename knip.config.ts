import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/index.ts"],
  ignore: [
    ".prettier.config.js",
    ".storybook/**",
    "storybook-static/**",
    "release.config.js",
    "svgr.config.cjs",
  ],
  ignoreDependencies: [
    "@smartive/prettier-config",
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "clsx",
    "http-server",
    "lucide-react",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
