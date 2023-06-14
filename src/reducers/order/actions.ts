import { ICoffee } from "@/mocks/coffees";
import { IAddress, PAYMENT_OPTION } from "./reducer";

export enum ActionTypes {
	ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
	CHANGE_COFFEE_QUANTITY = "CHANGE_COFFEE_QUANTITY",
	REMOVE_COFFEE = "REMOVE_COFFEE",
	CHANGE_ADDRESS = "CHANGE_ADDRESS",
	CHANGE_PAYMENT_MODE = "CHANGE_PAYMENT_MODE",
	SET_ORDER_TO_FINISHED = "SET_ORDER_TO_FINISHED",
}

export function addCoffeeToCartAction(coffee: ICoffee) {
	return { type: ActionTypes.ADD_NEW_COFFEE, payload: { coffee } };
}

export function changeCoffeeQuantityAction(quantity: number, coffee: ICoffee) {
	return {
		type: ActionTypes.CHANGE_COFFEE_QUANTITY,
		payload: { quantity, coffee },
	};
}
export function removeCoffeeInCartAction(id: number) {
	return { type: ActionTypes.REMOVE_COFFEE, payload: { id } };
}

export function changeAddress(address: IAddress) {
	return { type: ActionTypes.CHANGE_ADDRESS, payload: { address } };
}

export function changePaymentMode(paymentMode: PAYMENT_OPTION) {
	return { type: ActionTypes.CHANGE_PAYMENT_MODE, payload: { paymentMode } };
}
export function setOrderToFinished(isFinished: boolean) {
	return { type: ActionTypes.SET_ORDER_TO_FINISHED, payload: { isFinished } };
}
