const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const globals = require('globals');

// https://docs.expo.dev/guides/using-eslint/
// https://github.com/expo/expo/tree/main/packages/eslint-config-expo/utils
// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
module.exports = defineConfig([
  expoConfig,
  // Custom project rules.
  {
    rules: {
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@*/**',
              group: 'parent',
              position: 'before',
            },
          ],
          distinctGroup: true,
        },
      ],

      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  // Jest support in test files.
  {
    files: ['**/*.test.{ts,tsx}', '**/jest.setup.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
