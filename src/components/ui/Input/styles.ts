import styled, { css } from "styled-components";

import { IInput } from ".";

export const InputContainer = styled.input<IInput>`
	height: 42px;

	padding: 0.75rem;

	background: ${({ theme }) => theme.colors.gray_300};

	border: 1px solid ${({ theme }) => theme.colors.gray_400};

	border-radius: 4px;

	color: ${({ theme }) => theme.colors.gray_700};

	font-size: ${({ theme }) => theme.font_size.ROBOTO.s};

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray_600};
	}
	&:focus {
		border-color: ${({ theme }) => theme.colors.yellow_900};
	}
	&:invalid {
		border-color: #ff1414b7;
	}

	${({ wFull }) =>
		wFull &&
		css`
			width: 100%;
		`}
`;
