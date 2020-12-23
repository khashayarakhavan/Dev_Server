import colors from './colors';
import { css } from "styled-components";




const shadows = {
  mixins: {
    neumorphic: {
      onActive_orange: (...args) => css`
        box-shadow: ${({ variant }) =>
          variant === "active"
            ? shadows.neumorphic.orange
            : shadows.neumorphic.norm};
      `,
      orange: (...args) => css`
        box-shadow: ${shadows.neumorphic.orange};
      `,
      norm: (...args) => css`
        box-shadow: ${shadows.neumorphic.norm};
      `,
      light: (...args) => css`
        box-shadow: ${shadows.neumorphic.light};
      `,
      red: (...args) => css`
        box-shadow: ${shadows.neumorphic.red};
      `,
      original: (...args) => css`
        box-shadow: ${shadows.neumorphic.original};
      `,
      invert: (...args) => css`
        box-shadow: ${shadows.neumorphic.invert};
      `,
      extra: (...args) => css`
        box-shadow: ${shadows.neumorphic.extra};
      `,
      button: (...args) => css`
        box-shadow: ${shadows.neumorphic.button};
      `,
    },
  },
  neumorphic: {
    lightest: "rgba(255, 255, 255, 0.93)",
    lighter: " rgba(125, 126, 127, 0.4)",
    light: `0px 0px 15px 2px ${colors.shadows.light},
          -1px -1px 12px 2px ${colors.highlights.lighter}`,
    dark: `4px 4px 15px 2px ${colors.greyDark}`,
    norm: `4px 4px 10px 0px ${colors.shadows.lighter},
          -3px -3px 10px 0px ${colors.highlights.lightest}`,
    orange: `5px 5px 15px 0px  ${colors.shadows.dark},
           -4px -3px 4px 0px ${colors.neutrals.lightest}, inset 0px -6px 0px 0px ${colors.accent.lightest}`,
    orangeOld: `3px 3px 5px 0px  ${colors.shadows.dark},
           -3px -3px 4px 0px ${colors.neutrals.lightest},
          inset 0px -4px 0px 0px ${colors.accent.lightest}`,
    orange2: `0px 2px 5px 0px  ${colors.shadows.dark},
           -4px -3px 4px 0px ${colors.neutrals.lightest}, inset 0px -8px 0px 0px ${colors.accent.lightest}`,
    orange3: `4px 4px 15px 2px ${colors.shadows.lighter},
          -3px -3px 12px 2px ${colors.highlights.lightest},
           0px 4px 20px 5px ${colors.accent}`,
    red: `4px 4px 15px 2px ${colors.redLight},
          -3px -3px 12px 2px ${colors.redDark}`,
    original: `0px 2px 5px 0px  ${colors.shadows.dark},
           -4px -3px 4px 0px ${colors.neutrals.lightest}`,
    extra: `4px 4px 10px 0px  ${colors.shadows.dark},
           -4px -4px 10px 0px ${colors.highlights.lightest}`,
    invert: `4px 4px 10px 0px inset  ${colors.shadows.lighter},
           -3px -3px 10px 2px inset ${colors.highlights.lightest}`,
    button: `4px 4px 10px 0px   ${colors.shadows.lighter},
           -3px -3px 10px 0px  white`,
    buttonHover: `
    4px 4px 15px 2px ${colors.shadows.lighter},
           -3px -3px 12px 2px ${colors.highlights.lightest}; 
    `,
  },

  highlights: {
    lightest: "rgba(125,126,127,0.2)",
    lighter: " rgba(125,126,127,0.4)",
    light: "grey",
    dark: "darkgrey",
  },

  CTA: {
    lightest: "rgba(125,126,127,0.2)",
    lighter: " rgba(125,126,127,0.4)",
    light: "grey",
    dark: "darkgrey",
  },
  white: "#fff",
  primary: "#003153",
  accent: "#D65524",
  black: "black",
  palePink: "#fde2e4",
  paleYellow: "#fff1e6",
  paleGreen: " #dbe7e4",
  paleBlue: "#d6e2e9",

  grayLighter: "#D8D8D8",
  grayLight: "#ccc",
  grayDark: "#444",
  grayDarker: "#222",

  blueLight: "#2196F3",
  blueDark: "#104977",

  greenLight: "#8bc34a",
  greenDark: "#3b5221",

  yellowLight: "#ffc107",
  yellowDark: "#715605",

  redLight: "#e91e63",
  redDark: "#670a2a",
};

export default shadows;