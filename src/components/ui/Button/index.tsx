import { ThemeColorTypes } from "@/styles/themes/defaultTheme";

import { ButtonContainer } from "./styles";

import { ReactNode } from "react";

export interface IButtonRounded {
	rounded?: boolean;
}

interface ButtonProps extends IButtonRounded {
	children: ReactNode;
	background?: ThemeColorTypes;
}

export function Button({ background = "gray_400", children, rounded = false }: ButtonProps) {
	return (
		<ButtonContainer rounded={rounded} background={background}>
			{children}
		</ButtonContainer>
	);
}
