const pluginQuery = require('@tanstack/eslint-plugin-query');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const globals = require('globals');

module.exports = defineConfig([
  /**
   * Global ignores
   * https://eslint.org/docs/latest/use/configure/ignore#ignoring-files
   */
  {
    ignores: [
      // compiled project
      'dist/*',
      // static assets folder
      'public/*',
      // dependencies
      'node_modules/*',
    ],
  },
  /**
   * Expo config
   * https://docs.expo.dev/guides/using-eslint/
   * https://github.com/expo/expo/tree/main/packages/eslint-config-expo/utils
   */
  expoConfig,
  /**
   * Custom project rules
   */
  {
    plugins: {
      '@tanstack/query': pluginQuery,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
      'import/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          distinctGroup: true,
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@*/**',
              group: 'parent',
              position: 'before',
            },
          ],
        },
      ],

      '@tanstack/query/exhaustive-deps': 'warn',
      '@tanstack/query/no-rest-destructuring': 'warn',
      '@tanstack/query/stable-query-client': 'warn',
      '@tanstack/query/no-unstable-deps': 'warn',
      '@tanstack/query/infinite-query-property-order': 'warn',
      '@tanstack/query/no-void-query-fn': 'warn',

      // Disable the array notation police
      '@typescript-eslint/array-type': 'off',

      // Disable empty interface warnings in module augmentation
      '@typescript-eslint/no-empty-object-type': 'off',

      // Extend Expo config to support require GLSL files
      // https://github.com/expo/expo/blob/main/packages/eslint-config-expo/utils/typescript.js#L59
      '@typescript-eslint/no-require-imports': [
        'warn',
        {
          allow: [
            '\\.(aac|aiff|avif|bmp|caf|db|gif|glsl|heic|html|jpeg|jpg|json|m4a|m4v|mov|mp3|mp4|mpeg|mpg|otf|pdf|png|psd|sksl|svg|ttf|wav|webm|webp|xml|yaml|yml|zip)$',
          ],
        },
      ],
    },
  },
  /**
   * Allow `require` in CommonJS files.
   */
  {
    files: ['**/eslint.config.js', '**/jest.setup.js', '**/metro.config.js'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  /**
   * Configure Jest globals in relevant files.
   * https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables
   */
  {
    files: ['**/*.test.{ts,tsx}', '**/jest.setup.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
