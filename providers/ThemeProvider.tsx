import { ThemeProvider as RNThemeProvider } from '@react-navigation/native';
import { withUnistyles } from 'react-native-unistyles';

export const ThemeProvider = withUnistyles(RNThemeProvider, (theme, rt) => ({
  value: {
    dark: rt.themeName === 'dark',
    fonts: {
      heavy: {
        fontFamily: theme.font('Nunito', 'Black')!,
        fontWeight: '900' as const,
      },
      bold: {
        fontFamily: theme.font('Nunito', 'Bold')!,
        fontWeight: '700' as const,
      },
      medium: {
        fontFamily: theme.font('Nunito', 'Medium')!,
        fontWeight: '500' as const,
      },
      regular: {
        fontFamily: theme.font('Nunito', 'Regular')!,
        fontWeight: '400' as const,
      },
    },
    colors: {
      background: theme.tokens.grayBase,
      border: theme.tokens.accentBorder,
      card: theme.tokens.grayBase,
      notification: theme.tokens.accentSolid,
      primary: theme.tokens.grayTextContrast,
      text: theme.tokens.grayText,
    },
  },
}));
