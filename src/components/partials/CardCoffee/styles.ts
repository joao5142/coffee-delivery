import styled, { css } from "styled-components";

import { Card } from "@/styles/global";

export const CardCoffeeContainer = styled(Card)`
  width: 16rem;
  text-align: center;
  padding: 1.25rem;
`;

export const CoffeeTag = styled.button`
  ${({ theme }) => css`
    padding: 0.25rem 0.5rem;

    background-color: ${theme.colors.yellow_100};

    color: ${theme.colors.yellow_500};
    font-weight: bold;

    border-radius: 15px;
  `}
`;
