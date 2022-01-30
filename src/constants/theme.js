export const COLORS = {
  blue: '#0000B5',
  black: '#2C2738',
  gray: '#756F86',
  white: '#FFFFFF',
  gray_50: '#F9F9F9',
};

export const SIZES = {
  h1: 24,
  h2: 18,
  body_16: 16,
  body_14: 14,
  body_12: 12,
  body_10: 10,
};

export const FONTFAMILY = {
  100: 'Inter-Thin',
  200: 'Inter-ExtraLight',
  300: 'Inter-Light',
  400: 'Inter-Regular',
  500: 'Inter-Medium',
  600: 'Inter-SemiBold',
  700: 'Inter-Bold',
  800: 'Inter-ExtraBold',
  900: 'Inter-Black',
};

export const FONTS = {
  title: {
    fontSize: SIZES.h1,
    fontFamily: FONTFAMILY[400],
    lineHeight: 26,
  },
  heading: {
    fontSize: SIZES.h2,
    fontFamily: FONTFAMILY[400],
    lineHeight: 22,
  },
  body_16: {
    fontSize: SIZES.body_16,
    fontFamily: FONTFAMILY[400],
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  body_14: {
    fontSize: SIZES.body_14,
    fontFamily: FONTFAMILY[400],
    lineHeight: 20,
    letterSpacing: 0.25,
  },
};
