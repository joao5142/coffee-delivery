import styled from "styled-components";

export const FinishedContainer = styled.div``;

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

  min-width: 700px;
`;
