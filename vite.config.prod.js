import react from "@vitejs/plugin-react";
import { version } from "./package.json";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    sourcemap: true,
    minify: true,
    lib: {
      entry: "./src/index.jsx",
      fileName: "index.esm.js",
      formats: ["esm"],
    },
    outDir: `./dist/esm/${version}`,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        chunkFileNames: "[name].js",
      },
      external: [
        "react",
        "react-dom",
        "react-dom/client",
        "react-ace",
        /ace-builds/,
        "react/jsx-runtime",
        /dnd-kit/,
        /swr/,
        "classnames",
        "query-string",
        "yup",
        "formik",
        /react-select/,
        "prop-types",
        /@sw\-modules.*(?<!css)$/,
      ],
    },
  },
};
