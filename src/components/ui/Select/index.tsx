import { SelectContainer } from "./styles";

import { HTMLAttributes, ReactNode, forwardRef } from "react";

export interface ISelect {
	wFull?: boolean;
	name: string;
	children: ReactNode;
	value: string;
}
interface SelectProps extends Omit<HTMLAttributes<HTMLSelectElement>, "children">, ISelect {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ onChange, onBlur, name, wFull, placeholder,value, children, ...rest }, ref) => (
		<SelectContainer as="select" {...rest} name={name} onChange={onChange} onBlur={onBlur} wFull={wFull} value={value} ref={ref} >
			{children}
		</SelectContainer>
	)
);
