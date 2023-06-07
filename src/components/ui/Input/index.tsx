import { InputContainer } from "./styles";

import { InputHTMLAttributes, forwardRef } from "react";

import { UseFormRegister } from "react-hook-form";

export interface IInput {
	wFull?: boolean;
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement>, IInput {}

// export function Input({ wFull = false, ...rest }: InputProps) {
// 	return <InputContainer wFull={wFull} {...rest} />;
// }

// you can use React.forwardRef to pass the ref too
export const Input = forwardRef<HTMLInputElement, { wFull?: boolean } & ReturnType<UseFormRegister<InputProps>>>(
	({ onChange, onBlur, name, wFull, ...rest }, ref) => (
		<InputContainer {...rest} name={name} onChange={onChange} onBlur={onBlur} wFull={wFull} ref={ref} />
	)
);
