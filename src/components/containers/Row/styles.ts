import styled from "styled-components";

import { IAlignRow } from ".";
import { Box } from "@/styles/global";

const alignTypes = {
  around: "space-around",
  between: "space-between",
  center: "center",
  start: "flex-start",
  end: "flex-end",
} as const;

export const RowContainer = styled(Box)<IAlignRow>`
  display: flex;
  align-items: ${({ align }) => alignTypes[align!]};
  justify-content: ${({ justify }) => alignTypes[justify!]};
  gap: ${({ gap }) => gap}px;
`;
