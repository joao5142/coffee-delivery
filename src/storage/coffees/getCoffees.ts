import { COFFEE_ENTITY } from "../config";

export function getCoffees() {
	const storedData = localStorage.getItem(COFFEE_ENTITY);

	const storage = storedData && JSON.parse(storedData);

	return storage;
}
