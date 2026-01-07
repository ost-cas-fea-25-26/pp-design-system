import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    include: ["src/**/*.unit.test.ts?(x)"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
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
