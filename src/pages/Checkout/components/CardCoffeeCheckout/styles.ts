import { Button } from "@/components/ui/Button";

import { Trash } from "phosphor-react";

import styled from "styled-components";

export const CardCoffeeCheckoutContainer = styled.div``;

export const RemoveCoffeeButton = styled(Button)`
	text-transform: uppercase;
	margin-left: 0.5rem;
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
	size: 15,
	color: theme.colors.purple_500,
}))`
	cursor: pointer;
`;
