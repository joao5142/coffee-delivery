import styled from "styled-components";

import backgroundImage from "@assets/images/section-background.png";

export const MainContainer = styled.main`
  margin: 5rem 0rem;

  [data-option-items] {
    @media screen and (max-width: 500px) {
      & {
        flex-wrap: wrap;
        gap: 0px;
        justify-content: flex-start;
      }
    }
  }
  [data-container-coffee-image] img {
    @media screen and (max-width: 1000px) {
      & {
        width: 100%;
      }
    }
  }

  [data-row-banner-container] {
    @media screen and (max-width: 1000px) {
      & {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export const BannerSection = styled.section`
  padding: 4rem 0;
  min-height: 544px;

  background-image: url(${backgroundImage});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 544px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  gap: 50px 0px;

  @media screen and (max-width: 635px) {
    & {
      justify-items: center;
      align-items: center;
    }
  }
`;
