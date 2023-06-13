import { SelectContainer } from "./styles";

import { HTMLAttributes, forwardRef } from "react";

export interface ISelect {
	wFull?: boolean;
	name: string;
	data: [];
}
interface SelectProps extends HTMLAttributes<HTMLSelectElement>, ISelect {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ onChange, onBlur, name, wFull, placeholder, data, ...rest }, ref) => (
		<SelectContainer as="select" {...rest} name={name} onChange={onChange} onBlur={onBlur} wFull={wFull} ref={ref}>
			<option value="">{placeholder}</option>

			{data.map((item) => {
				return <option value="">{item}</option>;
			})}
		</SelectContainer>
	)
);
