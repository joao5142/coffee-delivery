import { ReactNode } from "react";
import { ErrorMessageContainer } from "./styles";
import { IBox } from "@/utils/types/Box";

interface ErrorMessageProps extends IBox {
	children: ReactNode;
}
export function ErrorMessage({ children }: ErrorMessageProps) {
	return <ErrorMessageContainer>{children}</ErrorMessageContainer>;
}
