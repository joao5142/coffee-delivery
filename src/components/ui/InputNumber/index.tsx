import { InputNumberContainer, MinusIcon, PlusIcon } from "./styles";

export function InputNumber() {
  return (
    <InputNumberContainer background="gray_400">
      <MinusIcon />
      <span>1</span>
      <PlusIcon />
    </InputNumberContainer>
  );
}
