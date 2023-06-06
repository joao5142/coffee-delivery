import styled, { css } from "styled-components";

import { Card } from "@/styles/global";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

export const CheckoutContainer = styled.div``;

export const CardContainer = styled(Card)``;

export const MapPinIcon = styled(MapPinLine).attrs(({ theme }) => ({
	size: 22,
	color: theme.colors.yellow_500,
}))``;

export const DollarIcon = styled(CurrencyDollar).attrs(({ theme }) => ({
	size: 22,
	color: theme.colors.purple_500,
}))``;

interface SelectProps {
	isActive: boolean;
}

export const Select = styled.button<SelectProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;

	padding: 1rem;
	width: 100%;

	background: ${({ theme }) => theme.colors.gray_400};

	font-size: ${({ theme }) => theme.font_size.ROBOTO.button_g}rem;
	color: ${({ theme }) => theme.colors.gray_700};

	text-transform: uppercase;

	border-radius: 6px;
	border: 1px solid transparent;

	cursor: pointer;

	${({ isActive, theme }) =>
		isActive &&
		css`
			background: ${theme.colors.purple_100};
			border: 1px solid ${theme.colors.purple_500};
		`};
`;

export const CreditIcon = styled(CreditCard).attrs(({ theme }) => ({
	size: 22,
	color: theme.colors.purple_500,
}))``;

export const BankIcon = styled(Bank).attrs(({ theme }) => ({
	size: 22,
	color: theme.colors.purple_500,
}))``;

export const MoneyIcon = styled(Money).attrs(({ theme }) => ({
	size: 22,
	color: theme.colors.purple_500,
}))``;
