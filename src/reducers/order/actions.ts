import { ICoffee } from "@/mocks/coffees";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  CHANGE_COFFEE_QUANTITY = "CHANGE_COFFEE_QUANTITY",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  CHANGE_ADDRESS = "CHANGE_ADDRESS",
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
