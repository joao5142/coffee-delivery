import { useState } from "react";

import { InputNumberContainer, MinusIcon, PlusIcon } from "./styles";

interface InputNumberProps {
	wFull: boolean;
}
export function InputNumber({ wFull = false }: InputNumberProps) {
	const [number, setNumber] = useState<number>(0);

	function handleChangeNumber(mode: string) {
		if (mode === "add" && number < 10) {
			setNumber((prevState) => prevState + 1);
		} else if (mode == "subtract" && number >= 1) {
			setNumber((prevState) => prevState - 1);
		}
	}

	return (
		<InputNumberContainer wFull={wFull}>
			<MinusIcon onClick={() => handleChangeNumber("subtract")} />
			<span>{number}</span>
			<PlusIcon onClick={() => handleChangeNumber("add")} />
		</InputNumberContainer>
	);
}
