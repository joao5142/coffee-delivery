import styled from "styled-components";

export const FinishedContainer = styled.div`
	@media (max-width: 1300px) {
		[data-row-finished-container] {
			align-items: center;
			justify-content: center;
		}
	}

	@media (max-width: 800px) {
		[data-row-finished-container] {
			align-items: center;
			justify-content: center;
		}

		[data-delivered-image] {
			width: 100%;
		}
	}
`;

export const CardInfos = styled.div`
	padding: 0px;

	border: solid 1px transparent;
	border-radius: 6px 36px;
	background-image: linear-gradient(
			${(props) => props.theme.colors.gray_100},
			${(props) => props.theme.colors.gray_100}
		),
		radial-gradient(circle at top left, #dbac2c, #8047f8);
	background-origin: border-box;
	background-clip: content-box, border-box;

	@media (max-width: 1300px) {
		min-width: 100%;
	}
	@media (min-width: 1400px) {
		min-width: 600px;
	}
`;
