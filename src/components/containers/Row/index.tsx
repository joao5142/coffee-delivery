import { ReactNode } from "react";
import { RowContainer } from "./styles";
import { Box } from "@/utils/types/Box";

export interface IRow {
	justify?: "center" | "between" | "around" | "start" | "end";
	align?: "center" | "start" | "end";
	gap?: number;
	wrap?: boolean;
}

interface RowProps extends IRow, Box {
	children: ReactNode;
	margin?: string;
	padding?: string;
}

export function Row({ children, justify = "start", align = "start", gap, wrap, ...rest }: RowProps) {
	return (
		<RowContainer {...rest} wrap={wrap} gap={gap} justify={justify} align={align}>
			{children}
		</RowContainer>
	);
}
