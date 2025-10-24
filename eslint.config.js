// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { config as smartiveConfig } from "@smartive/eslint-config";

const config = [...smartiveConfig("react"), {
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "react/forbid-component-props": "off",
    "import/no-unresolved": "off",
  },
}, ...storybook.configs["flat/recommended"]];

export default config;
