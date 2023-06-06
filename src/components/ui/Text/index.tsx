import {
  ThemeColorTypes,
  ThemeFontFamilyTypes,
  ThemeFontSizeTypes,
} from "@/styles/themes/defaultTheme";

import { TextContainer } from "./styles";

import { Box } from "@/utils/types/Box";

interface TextProps extends Box {
  element: any;
  text: string;
  size?: ThemeFontSizeTypes;
  fontFamily?: ThemeFontFamilyTypes;
  color?: ThemeColorTypes;
}
export function Text({
  text,
  element,
  fontFamily = "ROBOTO",
  size = "l",
  color = "gray_800",
  ...rest
}: TextProps) {
  return (
    <TextContainer
      {...rest}
      color={color}
      fontFamily={fontFamily}
      size={size}
      as={element}
    >
      {text}
    </TextContainer>
  );
}
