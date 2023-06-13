import { InputContainer } from "./styles";

import { HTMLAttributes, forwardRef } from "react";

export interface IInput {
	wFull?: boolean;
	name: string;
}
interface InputProps extends HTMLAttributes<HTMLInputElement>, IInput {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ onChange, onBlur, name, wFull, ...rest }, ref) => (
	<InputContainer as="input" {...rest} name={name} onChange={onChange} onBlur={onBlur} wFull={wFull} ref={ref} />
));
