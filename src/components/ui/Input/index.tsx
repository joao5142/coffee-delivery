import { InputContainer } from "./styles";

import { InputHTMLAttributes } from "react";

export interface IInput {
	wFull?: boolean;
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement>, IInput {}

export function Input({ wFull = false, ...rest }: InputProps) {
	return <InputContainer wFull={wFull} {...rest} />;
}
