import { ORDER_ENTITY, OrderDTO } from "../config";

export function setOrderToStorage(order: OrderDTO) {
	localStorage.setItem(ORDER_ENTITY, JSON.stringify(order));
}
