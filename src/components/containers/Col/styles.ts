import styled, { css } from "styled-components";

import { ICol } from ".";

export const ColContainer = styled.div<ICol>`
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
  ${({ flexGrow }) =>
    flexGrow &&
    css`
      flex-grow: ${flexGrow};
    `}
    	${({ flexShrink }) =>
    flexShrink &&
    css`
      flex-shrink: ${flexShrink};
    `}

        ${({ flexBasis }) =>
    flexBasis &&
    css`
      flex-basis: ${flexBasis};
    `}
`;
