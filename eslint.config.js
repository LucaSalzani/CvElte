import eslintPluginSvelte from 'eslint-plugin-svelte';
export default [
  ...eslintPluginSvelte.configs['flat/prettier'],
  {
    ignores: ["public/*"]
  }
];