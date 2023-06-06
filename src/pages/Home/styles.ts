import styled from "styled-components";

import backgroundImage from "@assets/images/section-background.svg";

export const MainContainer = styled.main`
  margin: 5rem 0rem;
`;

export const BannerSection = styled.section`
  padding: 4rem 0;
  height: 544px;

  background-image: url(${backgroundImage});

  background-position: center center;
  background-repeat: no-repeat;

  background-size: cover;
`;
