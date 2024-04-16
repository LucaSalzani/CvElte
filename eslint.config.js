import eslintPluginSvelte from "eslint-plugin-svelte";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...eslintPluginSvelte.configs["flat/prettier"],
  {
    ignores: ["public/*"],
  },
];
