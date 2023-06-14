import styled, { css } from "styled-components";

import { Field } from "@/styles/global";

import { ISelect } from ".";

export const SelectContainer = styled(Field)<ISelect>`
  ${({ wFull }) =>
    wFull &&
    css`
      width: 100%;
    `}

  outline:0;

  :nth-child(1) {
    color: ${({ theme }) => theme.colors.gray_600};
  }
`;
