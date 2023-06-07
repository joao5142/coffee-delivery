import styled from "styled-components";

import { Minus, Plus } from "phosphor-react";

import { ButtonContainer } from "../Button/styles";

export const InputNumberContainer = styled(ButtonContainer)`
  gap: 8px;
  display: flex;
  justify-content: center;
  width: 5.625rem;
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
