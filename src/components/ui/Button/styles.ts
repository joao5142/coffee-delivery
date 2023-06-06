import styled, { css } from "styled-components";

import { IThemeColor } from "@/styles/themes/defaultTheme";

import { IButtonRounded } from ".";

interface ButtonContainerProps extends IThemeColor, IButtonRounded {}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;

  height: 2.375rem;
  padding: 0.5rem;

  border-radius: 6px;

  background-color: ${({ theme, background }) => theme.colors[background]};

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `}
`;
