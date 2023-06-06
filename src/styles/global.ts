import { Box as BoxProps } from "@/utils/types/Box";
import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors["gray_100"]};
 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.font_family["ROBOTO"]};
    font-weight: 400;
    font-size: 1rem;

    outline: 0px;
    border: 0px;

    :focus{
      
      outline: 0px;
      border: 0px;
    }
  }
`;
export const Box = styled.div<BoxProps>`
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
    
    ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `}

    ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}

    ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

    ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `}

    ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom};
    `}
    ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft};
    `}
    ${({ paddingRight }) =>
    paddingRight &&
    css`
      padding-right: ${paddingRight};
    `}
`;

export const Card = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.colors.gray_300};
`;
