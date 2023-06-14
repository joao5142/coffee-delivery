import { ICoffee } from "@/reducers/order/reducer";
import { COFFEE_ENTITY } from "../config";

export function setCoffeesToStorage(coffees: ICoffee[]) {
	localStorage.setItem(COFFEE_ENTITY, JSON.stringify(coffees));
}
