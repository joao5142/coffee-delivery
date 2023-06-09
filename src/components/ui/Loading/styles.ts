import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const LoadingContainer = styled(Dialog.Root)``;

export const LoadingContainerOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  background: rgba(255, 255, 255, 0.7);

  z-index: 1;

  border: 0px;
`;

export const LoadingContent = styled(Dialog.Content)`
  z-index: 2;
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 250px;
    height: 250px;
  }

  border: 0px;
  outline: 0;
`;
