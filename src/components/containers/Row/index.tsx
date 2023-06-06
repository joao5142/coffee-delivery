import { ReactNode } from "react";
import { RowContainer } from "./styles";
import { Box } from "@/utils/types/Box";

export interface IAlignRow {
  justify?: "center" | "between" | "around" | "start" | "end";
  align?: "center" | "start" | "end";
  gap?: number;
}

interface RowProps extends IAlignRow, Box {
  children: ReactNode;
  margin?: string;
  padding?: string;
}

export function Row({
  children,
  justify = "start",
  align = "center",
  gap,
  ...rest
}: RowProps) {
  return (
    <RowContainer {...rest} gap={gap} justify={justify} align={align}>
      {children}
    </RowContainer>
  );
}
