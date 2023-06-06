import styled, { css } from "styled-components";

import {
  DefaultThemeType,
  ThemeColorTypes,
  ThemeFontFamilyTypes,
  ThemeFontSizeTypes,
} from "@/styles/themes/defaultTheme";
import { Box } from "@/styles/global";

interface TextContainerProps {
  size: ThemeFontSizeTypes;
  fontFamily: ThemeFontFamilyTypes;
  color: ThemeColorTypes;
}

function getSizeByFontFamily(
  size: ThemeFontSizeTypes,
  fontFamily: ThemeFontFamilyTypes,
  theme: DefaultThemeType
) {
  if (size in theme.font_size[fontFamily]) {
    return css`
      font-size: ${theme.font_size[fontFamily][size]}rem;
    `;
  } else {
    return css`
      font-size: 1rem;
    `;
  }
}

export const TextContainer = styled(Box)<TextContainerProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  ${({ fontFamily, theme }) => css`
    font-family: ${theme.font_family[fontFamily!]};
  `}
  ${({ size, fontFamily, theme }) =>
    getSizeByFontFamily(size!, fontFamily!, theme)};
`;
