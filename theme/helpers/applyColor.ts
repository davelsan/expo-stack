import { UnistylesThemes } from 'react-native-unistyles';

import { ColorToken } from '@theme/tokens';

import { isColorToken } from './isColorToken';

/**
 * Apply an input or default color.
 * @param color string or token to resolve
 * @param defaultColor color to use if an undefined input is provided
 * @param theme currently active theme
 */
export function applyColor(
  color: string | undefined,
  defaultColor: ColorToken | (string & {}),
  theme: UnistylesThemes['light']
) {
  if (!color) {
    return isColorToken(defaultColor)
      ? theme.tokens[defaultColor]
      : defaultColor;
  }

  return isColorToken(color) ? theme.tokens[color] : color;
}
