export type BackgroundToken = (typeof BACKGROUND_TOKEN)[number];
export type BorderToken = (typeof BORDER_TOKEN)[number];
export type SurfaceToken = (typeof SURFACE_TOKEN)[number];
export type TextToken = (typeof TEXT_TOKEN)[number];

export type ColorToken =
  | BackgroundToken
  | BorderToken
  | SurfaceToken
  | TextToken;

export const BACKGROUND_TOKEN = [
  'accentBase',
  'accentBgSubtle',
  'accentBg',
  'accentBgHover',
  'accentBgActive',

  'errorBase',
  'errorBgSubtle',
  'errorBg',
  'errorBgHover',
  'errorBgActive',

  'grayBase',
  'grayBgOverlay',
  'grayBgSubtle',
  'grayBg',
  'grayBgHover',
  'grayBgActive',

  'infoBase',
  'infoBgSubtle',
  'infoBg',
  'infoBgHover',
  'infoBgActive',

  'successBase',
  'successBgSubtle',
  'successBg',
  'successBgHover',
  'successBgActive',

  'warningBase',
  'warningBgSubtle',
  'warningBg',
  'warningBgHover',
  'warningBgActive',
] as const;

export const BORDER_TOKEN = [
  'accentLine',
  'accentBorder',
  'accentBorderHover',

  'grayLine',
  'grayBorder',
  'grayBorderHover',

  'errorLine',
  'errorBorder',
  'errorBorderHover',

  'successLine',
  'successBorder',
  'successBorderHover',

  'warningLine',
  'warningBorder',
  'warningBorderHover',

  'infoLine',
  'infoBorder',
  'infoBorderHover',
] as const;

export const SURFACE_TOKEN = [
  'accentSolid',
  'accentSolidHover',

  'errorSolid',
  'errorSolidHover',

  'infoSolid',
  'infoSolidHover',

  'graySolid',
  'graySolidHover',

  'successSolid',
  'successSolidHover',

  'warningSolid',
  'warningSolidHover',
] as const;

export const TEXT_TOKEN = [
  'accentText',
  'accentTextContrast',

  'errorText',
  'errorTextContrast',

  'grayText',
  'grayTextContrast',

  'infoText',
  'infoTextContrast',

  'successText',
  'successTextContrast',

  'warningText',
  'warningTextContrast',
] as const;

export const COLOR_TOKEN = [
  ...BACKGROUND_TOKEN,
  ...BORDER_TOKEN,
  ...SURFACE_TOKEN,
  ...TEXT_TOKEN,
] as const satisfies ColorToken[];
