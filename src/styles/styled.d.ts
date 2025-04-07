import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      neutrals: {
        lightest: string;
        extraLight: string;
        light: string;
        medium: string;
        dark: string;
        extraDark: string;
        darkest: string;
      };
      primary: {
        light: string;
        medium: string;
        dark: string;
      };
      secondary: {
        light: string;
        medium: string;
        dark: string;
      };
      accent: {
        light: string;
        medium: string;
        dark: string;
      };
    };
    typography: {
      family: string;
      sizes: {
        h1: string;
        h2: string;
        h3: string;
        bodyLarge: string;
        bodySmall: string;
        caption: string;
      };
      weights: {
        regular: number;
        semiBold: number;
        bold: number;
      };
    };
  }
}
