import { ActionTypes } from "./actions";
import { produce } from "immer";
import { Alert } from "@/utils/Alert";
import { setOrderToStorage } from "@/storage/order/setOrder";

export interface ICoffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  quantity?: number;
}

export interface IAddress {
  zipCode: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  federatedUnit: string;
}
export enum PAYMENT_OPTION {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  CASH = "CASH",
}

interface OrderState {
  coffees: ICoffee[];
  address: IAddress;
  paymentMode: PAYMENT_OPTION;
  isOrderFinished: boolean;
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
          setOrderToStorage(draft);
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
          setOrderToStorage(draft);
        }
      });
    }
    case ActionTypes.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        draft.coffees = draft.coffees.filter(
          (coffee) => coffee.id !== action.payload.id
        );
        setOrderToStorage(draft);
        Alert.success("Café removido do carrinho!");
      });
    }

    case ActionTypes.CHANGE_ADDRESS: {
      return produce(state, (draft) => {
        draft.address = action.payload.address;
      });
    }

    case ActionTypes.CHANGE_PAYMENT_MODE: {
      return produce(state, (draft) => {
        draft.paymentMode = action.payload.paymentMode;
        setOrderToStorage(draft);
      });
    }

    case ActionTypes.SET_ORDER_TO_FINISHED: {
      return produce(state, (draft) => {
        draft.isOrderFinished = action.payload.isFinished;
        draft.coffees = [];
      });
    }

    default:
      return state;
  }
}
