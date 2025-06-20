/* eslint-env node */

/**
 * Learn more:
 * https://docs.expo.dev/guides/customizing-metro
 * https://docs.expo.dev/guides/monorepos
 */

const { getDefaultConfig } = require('expo/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Find the project and workspace directories
const projectRoot = __dirname;

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

config.resolver.assetExts.push('glsl', 'sksl');

/**
 * Opt-out of the new ES Modules resolution.
 * @see https://docs.expo.dev/versions/latest/config/metro/#es-module-resolution
 */
// config.resolver.unstable_enablePackageExports = false;

module.exports = wrapWithReanimatedMetroConfig(config);
