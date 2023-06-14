import { ICoffee, coffees as mockCoffees } from "@/mocks/coffees";
import { setCoffeesToStorage } from "@/storage/coffees/addCoffees";
import { getCoffees } from "@/storage/coffees/getCoffees";
import { produce } from "immer";
import { ReactNode, useEffect, useState } from "react";

import { createContext } from "use-context-selector";

interface CoffeeContext {
	coffees: ICoffee[];
	setNewCoffees: (coffees: ICoffee[]) => void;
	changeQuantityCoffee: (quantity: number, id: number) => void;
	setCoffeesToInitialState: () => void;
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
		setCoffeesStorage(newCoffees);
	}
	function setCoffeesStorage(coffees: ICoffee[]) {
		setCoffeesToStorage(coffees);
	}
	function setCoffeesToInitialState() {
		setCoffees(mockCoffees);
	}

	useEffect(() => {
		const coffees = getCoffees();

		if (coffees) {
			setCoffees(coffees);
		}
	}, []);

	return (
		<CoffeeContext.Provider value={{ coffees, setNewCoffees, changeQuantityCoffee, setCoffeesToInitialState }}>
			{children}
		</CoffeeContext.Provider>
	);
}
