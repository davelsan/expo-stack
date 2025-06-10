import { Stack } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { ThemeProvider } from '@providers/ThemeProvider';
import { QueryProvider } from '@providers/QueryProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <ThemeProvider>
        <QueryProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </QueryProvider>
      </ThemeProvider>
    </KeyboardProvider>
  );
}
