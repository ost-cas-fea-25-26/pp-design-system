import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(viteConfig, { configType }) {
    if (configType === "PRODUCTION") {
      viteConfig.base = process.env.STORYBOOK_BASE_URL || "/";
    }
    return viteConfig;
  },
};

export default config;
