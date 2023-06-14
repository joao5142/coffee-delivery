import {
  addCoffeeToCartAction,
  changeAddress,
  changePaymentMode,
  removeCoffeeInCartAction,
} from "@/reducers/order/actions";

import {
  IAddress,
  ICoffee,
  PAYMENT_OPTION,
  orderReducer,
} from "@/reducers/order/reducer";

import { ReactNode, useReducer } from "react";

import { createContext } from "use-context-selector";

import { changeCoffeeQuantityAction } from "../reducers/order/actions";

interface OrderContextProps {
  coffees: ICoffee[];
  address: IAddress;
  paymentMode: PAYMENT_OPTION;
  addCoffee: (coffee: ICoffee) => void;
  removeCoffee: (id: number) => void;
  changeCoffeeQuantity: (quantity: number, coffee: ICoffee) => void;
  setAddress: (address: IAddress) => void;
  setPaymentMode: (paymentMode: PAYMENT_OPTION) => void;
}

export const OrderContext = createContext({} as OrderContextProps);

interface OrderProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, {
    coffees: [],
    address: {},
    paymentMode: null,
  });
  const { coffees, paymentMode, address } = orderState;

  function addCoffee(coffee: ICoffee) {
    return new Promise((resolve, reject) => {
      try {
        dispatch(addCoffeeToCartAction(coffee));
        resolve(true);
      } catch (error) {
        reject(true);
      }
    });
  }

  function removeCoffee(id: number) {
    return new Promise((resolve, reject) => {
      try {
        dispatch(removeCoffeeInCartAction(id));
        resolve(true);
      } catch (error) {
        reject(true);
      }
    });
  }
  function changeCoffeeQuantity(quantity: number, coffee: ICoffee) {
    return new Promise((resolve, reject) => {
      try {
        if (quantity === 0) {
          removeCoffee(coffee.id);
        } else if (quantity === 1) {
          const coffeeAlreadyExistsInCart = coffees.some(
            (cof) => cof.id == coffee.id
          );

          if (coffeeAlreadyExistsInCart) {
            dispatch(changeCoffeeQuantityAction(quantity, coffee));
          } else {
            addCoffee(coffee);
          }
        } else {
          dispatch(changeCoffeeQuantityAction(quantity, coffee));
        }
        resolve(true);
      } catch (err) {
        reject(true);
      }
    });
  }

  function setAddress(address: IAddress) {
    return new Promise((resolve, reject) => {
      try {
        dispatch(changeAddress(address));
        resolve(true);
      } catch (error) {
        reject(true);
      }
    });
  }

  function setPaymentMode(paymentMode: PAYMENT_OPTION) {
    return new Promise((resolve, reject) => {
      try {
        dispatch(changePaymentMode(paymentMode));
        resolve(true);
      } catch (error) {
        reject(true);
      }
    });
  }

  return (
    <OrderContext.Provider
      value={{
        coffees,
        addCoffee,
        removeCoffee,
        changeCoffeeQuantity,
        setAddress,
        setPaymentMode,
        paymentMode,
        address,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
