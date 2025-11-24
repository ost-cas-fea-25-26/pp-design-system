import { dts } from "rollup-plugin-dts";
import path from "node:path";

export default {
    input: path.resolve("src/index.ts"),
    output: {
        file: path.resolve("dist/types/index.d.ts"),
        format: "es",
    },
    external: ["class-variance-authority/types"],
    plugins: [dts()],
};
