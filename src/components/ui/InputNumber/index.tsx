import { useState } from "react";

import { InputNumberContainer, MinusIcon, PlusIcon } from "./styles";

export function InputNumber() {
	const [number, setNumber] = useState<number>(0);

	function handleChangeNumber(mode: string) {
		if (mode === "add" && number < 10) {
			setNumber((prevState) => prevState + 1);
		} else if (mode == "subtract" && number >= 1) {
			setNumber((prevState) => prevState - 1);
		}
	}

	return (
		<InputNumberContainer>
			<MinusIcon onClick={() => handleChangeNumber("subtract")} />
			<span>{number}</span>
			<PlusIcon onClick={() => handleChangeNumber("add")} />
		</InputNumberContainer>
	);
}
