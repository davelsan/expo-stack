import type { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'X Stack',
  slug: 'x-stack',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'com.davelsan.xstack',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.davelsan.xstack',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.davelsan.xstack',
  },
  plugins: [
    [
      'expo-asset',
      {
        assets: ['./assets/images'],
      },
    ],
    [
      'expo-font',
      {
        fonts: [
          './node_modules/@expo-google-fonts/nunito/300Light/Nunito_300Light.ttf',
          './node_modules/@expo-google-fonts/nunito/400Regular/Nunito_400Regular.ttf',
          './node_modules/@expo-google-fonts/nunito/500Medium/Nunito_500Medium.ttf',
          './node_modules/@expo-google-fonts/nunito/600SemiBold/Nunito_600SemiBold.ttf',
          './node_modules/@expo-google-fonts/nunito/700Bold/Nunito_700Bold.ttf',
          './node_modules/@expo-google-fonts/nunito/900Black/Nunito_900Black.ttf',
          './node_modules/@expo-google-fonts/space-mono/400Regular/SpaceMono_400Regular.ttf',
        ],
      },
    ],
    'expo-router',
    [
      'react-native-edge-to-edge',
      {
        android: {
          parentTheme: 'Default',
          enforceNavigationBarContrast: false,
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
