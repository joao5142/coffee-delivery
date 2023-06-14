import { IAddress, ICoffee, PAYMENT_OPTION } from "@/reducers/order/reducer";

export const COFFEE_ENTITY = "@coffee-delivery:coffees";
export const ORDER_ENTITY = "@coffee-delivery:order";

export interface OrderDTO {
	address: IAddress;
	paymentMode: PAYMENT_OPTION;
	coffees: ICoffee[];
}
