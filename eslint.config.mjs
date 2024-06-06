import globals from "globals";
import pluginJs from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  {
    plugins: { react },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      ...react.configs.recommended.languageOptions,
    },
    files: ["**/*.{js,jsx,mjs,cjs}"],
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": 0,
      "react/prop-types": 0,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
];
