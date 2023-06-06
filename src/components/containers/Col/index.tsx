import { ReactNode } from "react";
import { ColContainer } from "./styles";

export interface ICol {
	flex?: string;
	flexGrow?: string;
	flexShrink?: string;
	flexBasis?: string;
}
interface ColProps extends ICol {
	children: ReactNode;
}
export function Col({ children, ...rest }: ColProps) {
	return <ColContainer {...rest}>{children}</ColContainer>;
}
