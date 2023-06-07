import { ButtonContainer } from "@/components/ui/Button/styles";

import { Trash } from "phosphor-react";

import styled from "styled-components";

export const CardCoffeeCheckoutContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_400};

  padding-bottom: 1.5rem;

  img[data-coffee-image] {
    height: 5.875rem;
  }
`;

export const RemoveCoffeeButton = styled(ButtonContainer)`
  text-transform: uppercase;
  margin-left: 0.5rem;
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 15,
  color: theme.colors.purple_500,
}))`
  cursor: pointer;
`;