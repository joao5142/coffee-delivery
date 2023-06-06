import styled from "styled-components";

import backgroundImage from "@assets/images/section-background.png";

export const MainContainer = styled.main`
	margin: 5rem 0rem;
`;

export const BannerSection = styled.section`
	padding: 4rem 0;
	min-height: 544px;

	background-image: url(${backgroundImage});

	background-position: center top;
	background-repeat: no-repeat;

	background-size: 100% 544px;
`;
