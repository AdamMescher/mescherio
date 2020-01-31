import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      family: {
        sansSerif: string,
        serif: string,
      },
      fontSize: number[],
      fontWeight: {
        300: number,
        400: number,
        500: number,
        700: number,
      },
    },
    iconography: {
      size: number[],
    },
    spacing: number[],
    layout: number[],
    borderRadius: {
      square : string,
      small: string,
      medium: string,
      large: string,
      pill: string,
      circle: string,
    },
    colors: {
      primary: {
        100: string,
        200: string,
        300: string,
        400: string,
        500: string,
        600: string,
        700: string,
        800: string,
        900: string,
      },
      neutral: {
        charcoal: {
          200: string,
          300: string,
          400: string,
          500: string,
          600: string,
          700: string,
          800: string,
        },
        ash: {
          200: string,
          300: string,
          400: string,
          500: string,
          600: string,
          700: string,
          800: string,
        },
      },
      supporting: {
        green: {
          100: string,
          200: string,
          300: string,
          400: string,
          500: string,
          600: string,
          700: string,
          800: string,
          900: string,
        },
        red: {
          100: string,
          200: string,
          300: string,
          400: string,
          500: string,
          600: string,
          700: string,
          800: string,
          900: string,
        },
        gold: {
          100: string,
          200: string,
          300: string,
          400: string,
          500: string,
          600: string,
          700: string,
          800: string,
          900: string,
        },
        lavender: {
          100: string,
          200: string,
          300: string,
          400: string,
          500: string,
          600: string,
          700: string,
          800: string,
          900: string,
        }
      },
    },
    utilities: {
      flex: {
        center: string,
      },
      boxShadow: {
        none: string,
        tiny: string,
        small: string,
        medium: string,
        large: string,
        huge: string,
      },
      zIndex: {
        1: number,
        100: number,
        200: number,
        300: number,
        400: number,
        500: number,
        600: number,
        700: number,
        800: number,
        900: number,
        1000: number,
      },
    },
  }
}
