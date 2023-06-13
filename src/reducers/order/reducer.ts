import { ActionTypes } from "./actions";
import { produce } from "immer";
import { Alert } from "@/utils/Alert";

export interface ICoffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  quantity?: number;
}

interface IAddress {
  zipCode: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
}
enum PAYMENT_OPTION {
  CREDIT,
  DEBIT,
  CASH,
}

interface OrderState {
  coffees: ICoffee[];
  address: IAddress;
  paymentMode: PAYMENT_OPTION;
}

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id == action.payload.coffee.id
      );

      if (coffeeIndex < 0) {
        Alert.success("Café adicionado ao carrinho!");

        const payloadCoffee = action.payload.coffee;

        return produce(state, (draft) => {
          draft.coffees.push({ ...payloadCoffee, quantity: 1 });
        });
      }
      Alert.error("Café já foi adicionado ao carrinho!");
      return state;
    }
    case ActionTypes.CHANGE_COFFEE_QUANTITY: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id == action.payload.coffee.id
      );

      return produce(state, (draft) => {
        if (coffeeIndex != -1) {
          draft.coffees[coffeeIndex].quantity = action.payload.quantity;
        }
      });
    }
    case ActionTypes.REMOVE_COFFEE: {
      console.log("payload action:" + action.payload.id);
      return produce(state, (draft) => {
        draft.coffees = draft.coffees.filter(
          (coffee) => coffee.id !== action.payload.id
        );

        Alert.success("Café removido do carrinho!");
      });
    }

    default:
      return state;
  }
}
