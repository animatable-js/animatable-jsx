import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

const plugins = [
    typescript({
        tsconfig: "tsconfig.json",
        useTsconfigDeclarationDir: true,
    }),
    terser(),
];

/** The global identifier names of external dependencies. */
const globals = {
    "animatable-js": "AnimatableJS",
    "react": "React",
    "react-dom": "ReactDOM",
    "react/jsx-runtime": "jsxRuntime"
};

export default {
    plugins,
    input: "src/index.ts",
    external: ["react", "react-dom", "animatable-js"],
    output: [
        { file: "dist/index.esm.js", format: "esm", name: "AnimatableJSX", sourcemap: true },
        { file: "dist/index.umd.js", format: "umd", name: "AnimatableJSX", sourcemap: true, globals },
    ],
}