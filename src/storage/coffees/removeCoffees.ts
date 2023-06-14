import { COFFEE_ENTITY } from "../config";

export function removeCoffeesStorage() {
	localStorage.removeItem(COFFEE_ENTITY);
}
