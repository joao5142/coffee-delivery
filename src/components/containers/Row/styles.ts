import styled, { css } from "styled-components";

import { AlignType, IRow, JustifyType } from ".";

import { Box } from "@/styles/global";

const alignTypes = {
  around: "space-around",
  between: "space-between",
  center: "center",
  start: "flex-start",
  end: "flex-end",
} as const;

export const RowContainer = styled(Box)<IRow>`
  display: flex;

  gap: ${({ gap }) => gap}px;

  ${({ wrapRow }) =>
    wrapRow &&
    css`
      flex-wrap: wrap;
    `}

  ${({ direction, align, justify }) =>
    direction === "column"
      ? css`
          flex-direction: ${direction};
        `
      : css`
          align-items: ${alignTypes[align as JustifyType]};
          justify-content: ${alignTypes[justify as AlignType]};
        `}
`;
