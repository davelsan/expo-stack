import { ThemeProvider as RNThemeProvider } from '@react-navigation/native';

import { withUnistyles } from 'react-native-unistyles';

export const ThemeProvider = withUnistyles(RNThemeProvider, (theme, rt) => ({
  value: {
    dark: rt.themeName === 'dark',
    fonts: {
      heavy: {
        fontFamily: theme.font('Nunito', '900Black'),
        fontWeight: '900' as const,
      },
      bold: {
        fontFamily: theme.font('Nunito', '700Bold'),
        fontWeight: '700' as const,
      },
      medium: {
        fontFamily: theme.font('Nunito', '500Medium'),
        fontWeight: '500' as const,
      },
      regular: {
        fontFamily: theme.font('Nunito', '400Regular'),
        fontWeight: '400' as const,
      },
    },
    colors: {
      background: theme.colors.grayBase,
      border: theme.colors.accentBorder,
      card: theme.colors.grayBase,
      notification: theme.colors.accentSolid,
      primary: theme.colors.grayTextContrast,
      text: theme.colors.grayText,
    },
  },
}));
