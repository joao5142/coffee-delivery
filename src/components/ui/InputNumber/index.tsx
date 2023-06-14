import { InputNumberContainer, MinusIcon, PlusIcon } from "./styles";

interface InputNumberProps {
  wFull?: boolean;
  value?: number;
  onValueChange: (value: number) => void;
}
export function InputNumber({
  wFull = false,
  value = 0,
  onValueChange,
}: InputNumberProps) {
  function handleChangeNumber(mode: string) {
    if (mode === "add" && value < 10) {
      onValueChange(value + 1);
    } else if (mode == "subtract" && value >= 1) {
      onValueChange(value - 1);
    }
  }

  return (
    <InputNumberContainer wFull={wFull}>
      <MinusIcon onClick={() => handleChangeNumber("subtract")} />
      <span>{value}</span>
      <PlusIcon onClick={() => handleChangeNumber("add")} />
    </InputNumberContainer>
  );
}
