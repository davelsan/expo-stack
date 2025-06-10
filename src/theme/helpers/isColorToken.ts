import { COLOR_TOKEN, type ColorToken } from '../tokens';

/**
 * Check if a given string is a valid theme color token.
 * @param s string to check
 */
export function isColorToken(s: string | undefined): s is ColorToken {
  return Boolean(s) && COLOR_TOKEN.includes(s as ColorToken);
}
