import { ReactNode } from "react";
import { ContainerDefault } from "./styles";

interface ContainerProps {
  children: ReactNode;
}
export function Container({ children }: ContainerProps) {
  return <ContainerDefault>{children}</ContainerDefault>;
}
