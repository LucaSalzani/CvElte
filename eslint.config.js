import eslintPluginSvelte from "eslint-plugin-svelte";
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  ...eslintPluginSvelte.configs["flat/prettier"],
  {
    ignores: ["public/*"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.commonjs,
      },
    },
  },
];
