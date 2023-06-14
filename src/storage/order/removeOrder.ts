import { ORDER_ENTITY } from "../config";

export function removeOrderStorage() {
	localStorage.removeItem(ORDER_ENTITY);
}
