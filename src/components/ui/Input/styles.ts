import styled, { css } from "styled-components";

import { IInput } from ".";
import { Field } from "@/styles/global";

export const InputContainer = styled(Field)<IInput>`
	${({ wFull }) =>
		wFull &&
		css`
			width: 100%;
		`}
`;
