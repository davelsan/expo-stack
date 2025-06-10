import { baseTheme } from './theme-base';
import type {
  BackgroundToken,
  BorderToken,
  SurfaceToken,
  TextToken,
} from './tokens';
import { darkColors } from './vars/colors';

const backgroundTokens: Record<BackgroundToken, string> = {
  accentBase: darkColors.purple1,
  accentBgSubtle: darkColors.purple2,
  accentBg: darkColors.purple3,
  accentBgHover: darkColors.purple4,
  accentBgActive: darkColors.purple5,

  errorBase: darkColors.ruby1,
  errorBgSubtle: darkColors.ruby2,
  errorBg: darkColors.ruby3,
  errorBgHover: darkColors.ruby4,
  errorBgActive: darkColors.ruby5,

  grayBase: darkColors.mauve1,
  grayBgOverlay: `${darkColors.mauve1}CC`, // 80% alpha
  grayBgSubtle: darkColors.mauve2,
  grayBg: darkColors.mauve3,
  grayBgHover: darkColors.mauve4,
  grayBgActive: darkColors.mauve5,

  infoBase: darkColors.cyan1,
  infoBgSubtle: darkColors.cyan2,
  infoBg: darkColors.cyan3,
  infoBgHover: darkColors.cyan4,
  infoBgActive: darkColors.cyan5,

  successBase: darkColors.jade1,
  successBgSubtle: darkColors.jade2,
  successBg: darkColors.jade3,
  successBgHover: darkColors.jade4,
  successBgActive: darkColors.jade5,

  warningBase: darkColors.amber1,
  warningBgSubtle: darkColors.amber2,
  warningBg: darkColors.amber3,
  warningBgHover: darkColors.amber4,
  warningBgActive: darkColors.amber5,
};

const borderTokens: Record<BorderToken, string> = {
  accentLine: darkColors.purple6,
  accentBorder: darkColors.purple7,
  accentBorderHover: darkColors.purple8,

  grayLine: darkColors.mauve6,
  grayBorder: darkColors.mauve7,
  grayBorderHover: darkColors.mauve8,

  errorLine: darkColors.ruby6,
  errorBorder: darkColors.ruby7,
  errorBorderHover: darkColors.ruby8,

  successLine: darkColors.jade6,
  successBorder: darkColors.jade7,
  successBorderHover: darkColors.jade8,

  warningLine: darkColors.amber6,
  warningBorder: darkColors.amber7,
  warningBorderHover: darkColors.amber8,

  infoLine: darkColors.cyan6,
  infoBorder: darkColors.cyan7,
  infoBorderHover: darkColors.cyan8,
};

const surfaceTokens: Record<SurfaceToken, string> = {
  accentSolid: darkColors.purple9,
  accentSolidHover: darkColors.purple10,

  errorSolid: darkColors.ruby9,
  errorSolidHover: darkColors.ruby10,

  infoSolid: darkColors.cyan9,
  infoSolidHover: darkColors.cyan10,

  graySolid: darkColors.mauve9,
  graySolidHover: darkColors.mauve10,

  successSolid: darkColors.jade9,
  successSolidHover: darkColors.jade10,

  warningSolid: darkColors.amber9,
  warningSolidHover: darkColors.amber10,
};

const textTokens: Record<TextToken, string> = {
  accentText: darkColors.purple11,
  accentTextContrast: darkColors.purple12,

  errorText: darkColors.ruby11,
  errorTextContrast: darkColors.ruby12,

  grayText: darkColors.mauve11,
  grayTextContrast: darkColors.mauve12,

  infoText: darkColors.cyan11,
  infoTextContrast: darkColors.cyan12,

  successText: darkColors.jade11,
  successTextContrast: darkColors.jade12,

  warningText: darkColors.amber11,
  warningTextContrast: darkColors.amber12,
};

export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
  tokens: {
    ...backgroundTokens,
    ...borderTokens,
    ...surfaceTokens,
    ...textTokens,
  },
} as const;
