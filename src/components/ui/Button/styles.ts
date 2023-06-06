import styled, { css } from "styled-components";

import { ThemeColorTypes } from "@/styles/themes/defaultTheme";

import { IButtonRounded } from ".";

interface ButtonContainerProps extends IButtonRounded {
	background: ThemeColorTypes;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
	display: flex;
	align-items: center;

	height: 2.375rem;
	padding: 0.5rem;

	border-radius: 6px;

	background-color: ${({ theme, background }) => theme.colors[background]};

	${({ rounded }) =>
		rounded &&
		css`
			border-radius: 50%;
		`}
`;
