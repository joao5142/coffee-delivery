import { SelectContainer } from "./styles";

import { HTMLAttributes, ReactNode, forwardRef } from "react";

export interface ISelect {
  wFull?: boolean;
  name: string;
  children: ReactNode;
}
interface SelectProps
  extends Omit<HTMLAttributes<HTMLSelectElement>, "children">,
    ISelect {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ onChange, onBlur, name, wFull, placeholder, children, ...rest }, ref) => (
    <SelectContainer
      as="select"
      {...rest}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      wFull={wFull}
      ref={ref}
    >
      {children}
    </SelectContainer>
  )
);
