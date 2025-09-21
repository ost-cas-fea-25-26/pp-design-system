import { config as smartiveConfig } from "@smartive/eslint-config";

const config = [
  ...smartiveConfig("react"),
  {
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/forbid-component-props": "off",
      "import/no-unresolved": "off",
    },
  },
];

export default config;
