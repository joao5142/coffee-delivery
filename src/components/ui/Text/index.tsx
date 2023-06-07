import { ThemeColorTypes, ThemeFontFamilyTypes, ThemeFontSizeTypes } from "@/styles/themes/defaultTheme";

import { TextContainer } from "./styles";

import { IBox } from "@/utils/types/Box";

import { HtmlHTMLAttributes, ReactNode } from "react";

export interface IText {
	size?: ThemeFontSizeTypes;
	fontFamily?: ThemeFontFamilyTypes;
	color?: ThemeColorTypes;
	weight?: string;
	lineHeight?: string;
}
interface TextProps extends IBox, IText, Omit<HtmlHTMLAttributes<HTMLElement>, "color"> {
	element: any;
	text?: string;
	children?: ReactNode;
}
export function Text({
	text,
	element,
	fontFamily = "ROBOTO",
	size = "l",
	color = "gray_800",
	weight = "400",
	lineHeight = "130%",
	children,
	...rest
}: TextProps) {
	return (
		<TextContainer
			{...rest}
			color={color}
			weight={weight}
			fontFamily={fontFamily}
			size={size}
			lineHeight={lineHeight}
			as={element}
		>
			{children ? children : text}
		</TextContainer>
	);
}
