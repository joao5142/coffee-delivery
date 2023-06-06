import { IThemeColor } from "@/styles/themes/defaultTheme";

import { ButtonContainer } from "./styles";

import { ReactNode } from "react";

export interface IButtonRounded {
  rounded?: boolean;
}
interface ButtonProps extends IThemeColor, IButtonRounded {
  children: ReactNode;
}

export function Button({ background, children, rounded = true }: ButtonProps) {
  return (
    <ButtonContainer rounded={rounded} background={background}>
      {children}
    </ButtonContainer>
  );
}
