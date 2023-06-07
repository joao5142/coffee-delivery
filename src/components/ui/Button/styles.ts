import styled, { css } from "styled-components";

import { ThemeColorTypes } from "@/styles/themes/defaultTheme";

import { IButtonRounded } from ".";

interface ButtonContainerProps extends IButtonRounded {
	background?: ThemeColorTypes;
	wFull?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
	display: flex;
	align-items: center;

	height: 2.375rem;
	padding: 0.5rem;

	border-radius: 6px;

	cursor: pointer;

	background-color: ${({ theme, background = "gray_400" }) => theme.colors[background!]};

	${({ wFull }) =>
		wFull &&
		css`
			width: 100%;
		`}

	${({ rounded }) =>
		rounded &&
		css`
			border-radius: 50%;
		`}

  &:active {
		transform: scale(0.98);
	}
`;
