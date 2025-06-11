import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  setupFiles: [
    './jest.setup.ts',
    'react-native-unistyles/mocks',
    './src/theme/unistyles.ts',
  ],
  /**
   * Only match `*.test` or `*.spec` files within __tests__ folders.
   * @see https://jestjs.io/docs/configuration#testmatch-arraystring
   */
  testMatch: ['**/__tests__/**/*.(test|spec).[jt]s?(x)'],
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
