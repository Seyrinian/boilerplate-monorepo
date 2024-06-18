import eslintToolsConfig from '@boilerplate-monorepo/tools/eslint.config.js';

export default [
  ...eslintToolsConfig,
  {
    rules: {},
  },
  {
    ignores: ['.nuxt/**/*', '.output/**/*'],
  },
];
