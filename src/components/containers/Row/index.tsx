import { ReactNode } from "react";
import { RowContainer } from "./styles";
import { IBox } from "@/utils/types/Box";

export type RowDirectionTypes = "row" | "column";
export type JustifyType = "center" | "between" | "around" | "start" | "end";
export type AlignType = "center" | "start" | "end";

export interface IRow {
  justify?: JustifyType;
  align?: AlignType;
  gap?: number;
  wrapRow?: boolean;
  direction?: RowDirectionTypes;
}

interface RowProps extends IRow, IBox {
  children: ReactNode;
  margin?: string;
  padding?: string;
}

export function Row({
  children,
  justify = "start",
  align = "start",
  direction = "row",
  gap,
  wrapRow = false,
  ...rest
}: RowProps) {
  return (
    <RowContainer
      {...rest}
      direction={direction}
      wrapRow={wrapRow}
      gap={gap}
      justify={justify}
      align={align}
    >
      {children}
    </RowContainer>
  );
}
