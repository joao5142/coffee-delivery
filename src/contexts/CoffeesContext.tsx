import { ICoffee, coffees, coffees as mockCoffees } from "@/mocks/coffees";
import { produce } from "immer";
import { ReactNode, useState } from "react";

import { createContext } from "use-context-selector";

interface CoffeeContext {
  coffees: ICoffee[];
  setNewCoffees: (coffees: ICoffee[]) => void;
  changeQuantityCoffee: (quantity: number, id: number) => void;
}
export const CoffeeContext = createContext({} as CoffeeContext);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeProvider({ children }: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState(mockCoffees);

  function setNewCoffees(coffees: ICoffee[]) {
    setCoffees(coffees);
  }
  function changeQuantityCoffee(quantity: number, id: number) {
    const newCoffees = produce(coffees, (draft) => {
      const coffeeIndex = draft.findIndex((coffee) => coffee.id === id);
      draft[coffeeIndex].quantity = quantity;
    });

    setCoffees(newCoffees);
  }
  return (
    <CoffeeContext.Provider
      value={{ coffees, setNewCoffees, changeQuantityCoffee }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
