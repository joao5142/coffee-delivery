import { Row } from "@/components/containers/Row";
import { ButtonContainer } from "@/components/ui/Button/styles";

import { Trash } from "phosphor-react";

import styled from "styled-components";

export const CardCoffeeCheckoutContainer = styled.div`
	img[data-coffee-image] {
		height: 5.875rem;
	}

	@media (max-width: 600px) {
		img[data-coffee-image] {
			height: 3.875rem;
		}
	}

	max-height: 400px;
	overflow-y: auto;
`;
export const CardCoffeeCheckoutRow = styled(Row).attrs(() => ({
	justify: "between",
}))`
	border-bottom: 1px solid ${(props) => props.theme.colors.gray_400};

	padding: 1.5rem 0;
	padding-right: 0.8rem;
`;
export const RemoveCoffeeButton = styled(ButtonContainer)`
	text-transform: uppercase;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
	size: 15,
	color: theme.colors.purple_500,
}))`
	cursor: pointer;
`;

export const SubmitButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-width: 11.5625rem;
	height: 46px;
	margin-top: 1.5rem;

	font-size: ${(props) => props.theme.font_size.ROBOTO.s};
	color: ${(props) => props.theme.colors.white};

	background-color: ${(props) => props.theme.colors.yellow_500};

	text-transform: uppercase;

	border-radius: 6px;

	cursor: pointer;

	&:active {
		transform: scale(0.98);
	}
`;
