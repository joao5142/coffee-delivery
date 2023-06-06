import styled, { css } from "styled-components";

import { Card } from "@/styles/global";

export const CardCoffeeContainer = styled(Card)`
  width: 16rem;
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
