import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  setupFiles: [
    './jest.setup.js',
    'react-native-unistyles/mocks',
    './src/theme/unistyles.ts',
  ],
  /**
   * Only match `*.test.tsx?` or `*.spec.tsx?` files.
   * This ignores supporting files, such as `utils.ts`.
   * @see https://jestjs.io/docs/configuration#testmatch-arraystring
   */
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/__tests__/**/*.spec.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg))',
  ],
  verbose: true,
  collectCoverage: true,
  coverageReporters: [
    'clover',
    'json',
    'lcov',
    // 'text',
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/android/**',
    '!**/ios/**',
    '!**/app.config.ts',
    '!**/coverage/**',
    '!**/dist/**',
    '!**/drizzle.config.ts',
    '!**/expo-env.d.ts',
    '!**/.expo/**',
    '!**/jest.config.ts',
    '!**/node_modules/**',
    '!**/shims-assets.d.ts',
  ],
};

export default config;
