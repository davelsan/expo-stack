import type { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Expo Stack',
  slug: 'xstack',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  scheme: 'com.anonymous.xstack',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.anonymous.xstack',
    icon: {
      dark: './src/assets/images/icon-ios-dark.png',
      light: './src/assets/images/icon-ios-light.png',
      tinted: './src/assets/images/icon-ios-tinted.png',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
      // backgroundImage: './src/assets/images/adaptive-icon-background.png',
    },
    package: 'com.anonymous.xstack',
  },
  plugins: [
    [
      'expo-asset',
      {
        assets: ['./src/assets/images'],
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
      'expo-splash-screen',
      {
        ios: {
          image: './src/assets/images/splash.png',
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
          imageWidth: 200,
          dark: {
            image: './src/assets/images/splash-dark.png',
            backgroundColor: '#000000',
          },
        },
        android: {
          image: './src/assets/images/splash.png',
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
          imageWidth: 150,
          dark: {
            image: './src/assets/images/splash-dark.png',
            backgroundColor: '#000000',
          },
        },
      },
    ],
    'expo-web-browser',
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
