import styled from "styled-components";

export const FormContainer = styled.form`
	@media screen and (max-width: 600px) {
		[data-row] {
			max-width: 100%;
			flex-direction: column;

			[data-col] {
				flex: 0;
				min-width: 100%;
			}
			input {
				min-width: 100%;
			}
		}
	}
`;
