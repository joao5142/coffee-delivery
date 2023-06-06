import styled from "styled-components";

import { ButtonContainer } from "../Button/styles";
import { Minus, Plus } from "phosphor-react";

export const InputNumberContainer = styled(ButtonContainer)`
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
