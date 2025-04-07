/**
 * This the customized theme, and it was necessary to  create a definition  for typescript purpose
 *
 */

export const theme = {
  colors: {
    neutrals: {
      lightest: "#F0F0F2",
      extraLight: "#E0E2E6",
      light: "#C0C2C8",
      medium: "#9EA0A5",
      dark: "#7F8185",
      extraDark: "#5E5F63",
      darkest: "#202122",
    },
    primary: {
      light: "#0B0E3A",
      medium: "#060725",
      dark: "#020318",
    },
    secondary: {
      light: "#EFC4B4",
      medium: "#D31450",
      dark: "#8C1038",
    },
    accent: {
      light: "#00BFC1",
      medium: "#009598",
      dark: "#006C6E",
    },
  },
  typography: {
    family: `'Open Sans', sans-serif`,
    sizes: {
      h1: "3.5rem",
      h2: "2.25rem",
      h3: "1.25rem",
      bodyLarge: "1rem",
      bodySmall: "0.875rem",
      caption: "0.75rem",
    },
    weights: {
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
  },
};
