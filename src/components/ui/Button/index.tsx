import { ThemeColorTypes } from "@/styles/themes/defaultTheme";

import { ButtonContainer } from "./styles";

import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButtonRounded {
  rounded?: boolean;
}

interface ButtonProps
  extends IButtonRounded,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background?: ThemeColorTypes;
}

export function Button({
  background = "gray_400",
  children,
  rounded = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer rounded={rounded} background={background} {...rest}>
      {children}
    </ButtonContainer>
  );
}
