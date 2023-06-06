import { ThemeColorTypes, ThemeFontFamilyTypes, ThemeFontSizeTypes } from "@/styles/themes/defaultTheme";

import { TextContainer } from "./styles";

import { Box } from "@/utils/types/Box";

import { HtmlHTMLAttributes } from "react";

export interface IText {
	size?: ThemeFontSizeTypes;
	fontFamily?: ThemeFontFamilyTypes;
	color?: ThemeColorTypes;
	weight?: string;
}
interface TextProps extends Box, IText, Omit<HtmlHTMLAttributes<HTMLElement>, "color"> {
	element: any;
	text: string;
}
export function Text({
	text,
	element,
	fontFamily = "ROBOTO",
	size = "l",
	color = "gray_800",
	weight = "400",
	...rest
}: TextProps) {
	return (
		<TextContainer {...rest} color={color} fontFamily={fontFamily} size={size} as={element}>
			{text}
		</TextContainer>
	);
}
