import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    include: ["src/**/*.unit.test.ts?(x)"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
      exclude: [
        "src/**/*.stories.*",
        "src/**/*.e2e.test.*",
        "src/**/index.ts",
        "src/icons/**/*.svg",
      ],
    },
  },
});
