import styled, { css } from "styled-components";

import { Card } from "@/styles/global";

import { ShoppingCartSimple } from "phosphor-react";

export const CardCoffeeContainer = styled(Card)`
  min-width: 16rem;
  max-width: 17rem;
  padding: 1.25rem;

  text-align: center;

  border: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const CoffeeTag = styled.button`
  ${({ theme }) => css`
    padding: 0.25rem 0.5rem;

    background-color: ${theme.colors.yellow_100};

    color: ${theme.colors.yellow_500};
    font-weight: bold;

    border-radius: 15px;

    margin: 0.75rem 0 1rem 0;
  `}
`;

export const ImageCoffee = styled.img`
  margin-top: -50px;
`;

export const ShoppingCartIcon = styled(ShoppingCartSimple).attrs({
  size: 22,
  color: "white",
  weight: "fill",
})`
  cursor: pointer;
`;
