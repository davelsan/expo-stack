import type { ExtractFace, FontFamily } from '@theme/vars/fonts';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';

export type TextOptions<Family extends FontFamily> = {
  family?: Family;
  face?: ExtractFace<Family>;
  size?: number;
};

const styleSheet = StyleSheet.create((theme) => ({
  text: <Family extends FontFamily>(options: TextOptions<Family>) => ({
    color: theme.colors.grayTextContrast,
    fontSize: options.size,
    fontFamily:
      options.family && options.face
        ? theme.font(options.family, options.face)
        : undefined,
    variants: {
      align: {
        center: {
          textAlign: 'center',
        },
        left: {
          textAlign: 'left',
        },
        right: {
          textAlign: 'right',
        },
        justify: {
          textAlign: 'justify',
        },
      },

      transform: {
        capitalize: {
          textTransform: 'capitalize',
        },
        lowercase: {
          textTransform: 'lowercase',
        },
        uppercase: {
          textTransform: 'uppercase',
        },
      },

      /**
       * Spec from Human Interface Guidelines (iOS, iPad -> Large)
       * @see https://developer.apple.com/design/human-interface-guidelines/typography#Specifications
       */
      variant: {
        largeTitle: {
          fontSize: 34,
          fontFamily: theme.font('Nunito', 'Bold'),
          lineHeight: 41,
        },
        title1: {
          fontSize: 28,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 34,
        },
        title2: {
          fontSize: 22,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 28,
        },
        title3: {
          fontSize: 20,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 25,
        },
        headline: {
          fontSize: 17,
          fontFamily: theme.font('Nunito', 'SemiBold'),
          lineHeight: 22,
        },
        body: {
          fontSize: 17,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 22,
        },
        callout: {
          fontSize: 16,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 21,
        },
        subhead: {
          fontSize: 15,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 20,
        },
        footnote: {
          fontSize: 13,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 18,
        },
        caption1: {
          fontSize: 12,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 16,
        },
        caption2: {
          fontSize: 11,
          fontFamily: theme.font('Nunito', 'Regular'),
          lineHeight: 13,
        },
      },
    },
  }),
}));

export type TextVariants = UnistylesVariants<typeof styleSheet>;

export default styleSheet;
