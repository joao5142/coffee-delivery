import {
  LoadingContainer,
  LoadingContainerOverlay,
  LoadingContent,
} from "./styles";

import * as Dialog from "@radix-ui/react-dialog";
import coffeeGif from "@assets/images/coffee.gif";

export function Loading() {
  return (
    <LoadingContainer open>
      <Dialog.Portal>
        <LoadingContainerOverlay />
        <LoadingContent>
          <img src={coffeeGif} alt="coffee" />
        </LoadingContent>
      </Dialog.Portal>
    </LoadingContainer>
  );
}
