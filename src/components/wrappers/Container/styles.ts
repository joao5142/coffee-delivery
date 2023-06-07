import styled from "styled-components";

export const ContainerDefault = styled.div`
  max-width: 80vw;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    & {
      max-width: 95vw;
    }
  }
  @media screen and (min-width: 1600px) {
    max-width: 1500px;
  }
`;
