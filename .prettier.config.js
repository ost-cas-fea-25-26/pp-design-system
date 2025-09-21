import smartive from "@smartive/prettier-config";

const { $schema, ...config } = smartive;

export default {
  plugins: ["prettier-plugin-tailwindcss"],
  ...config,
  tailwindStylesheet: "./src/styles/globals.css",
};
