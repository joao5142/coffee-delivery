import styled from "styled-components";

import { Minus, Plus } from "phosphor-react";
import { Button } from "../Button";

export const InputNumberContainer = styled(Button)`
	gap: 8px;
`;

export const MinusIcon = styled(Minus).attrs(({ theme }) => ({
	size: 15,
	color: theme.colors.purple_500,
}))`
	cursor: pointer;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
	size: 15,
	color: theme.colors.purple_500,
}))`
	cursor: pointer;
`;
