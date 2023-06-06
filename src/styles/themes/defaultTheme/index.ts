export const fontSize = {
  BALOO: {
    xl: 3,
    l: 2,
    m: 1.5,
    s: 1.25,
    xs: 1.125,
  },
  ROBOTO: {
    l: 1.25,
    m: 1,
    s: 0.875,
    xs: 0.75,
    tag: 0.625,
    button_g: 0.875,
    button_m: 0.75,
  },
};

export const defaultTheme = {
  colors: {
    white: "#FFFFFF",
    gray_100: "#FAFAFA",
    gray_200: "#F3F2F2",
    gray_300: "#EDEDED",
    gray_400: "#E6E5E5",
    gray_500: "#D7D5D5",
    gray_600: "#8D8686",
    gray_700: "#574F4D",
    gray_800: "#403937",
    gray_900: "#272221",

    purple_100: "#EBE5F9",
    purple_500: "#8047F8",
    purple_900: "#4B2995",

    yellow_100: "#F1E9C9",
    yellow_500: "#DBAC2C",
    yellow_900: "#C47F17",
  },
  font_family: {
    ROBOTO: "'Roboto', sans-serif",
    BALOO: "'Baloo 2',sans-serif",
  },
  font_size: fontSize,
};

export interface IThemeColor {
  background: keyof typeof defaultTheme.colors;
}

export type ThemeFontSizeTypes = "xl" | "l" | "m" | "s" | "xs";
export type ThemeFontFamilyTypes = keyof typeof defaultTheme.font_family;
export type ThemeColorTypes = keyof typeof defaultTheme.colors;

export type DefaultThemeType = typeof defaultTheme;
