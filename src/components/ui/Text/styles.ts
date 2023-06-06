import styled, { css } from "styled-components";

import { DefaultThemeType, ThemeFontFamilyTypes, ThemeFontSizeTypes } from "@/styles/themes/defaultTheme";
import { Box } from "@/styles/global";

import { IText } from ".";

function getSizeByFontFamily(size: ThemeFontSizeTypes, fontFamily: ThemeFontFamilyTypes, theme: DefaultThemeType) {
	const sizesObject = theme.font_size[fontFamily];

	if (size in sizesObject) {
		return css`
			font-size: ${sizesObject[size as keyof typeof sizesObject]}rem;
		`;
	} else {
		return css`
			font-size: 1rem;
		`;
	}
}

export const TextContainer = styled(Box)<IText>`
	color: ${({ theme, color }) => theme.colors[color!]};
	${({ fontFamily, theme }) => css`
		font-family: ${theme.font_family[fontFamily!]};
	`}
	${({ weight }) =>
		weight &&
		css`
			font-weight: ${weight};
		`}

  ${({ size, fontFamily, theme }) => getSizeByFontFamily(size!, fontFamily!, theme)};
`;
