import { ICoffee } from "@/mocks/coffees";

import {
	CardCoffeeCheckoutContainer,
	CardCoffeeCheckoutRow,
	RemoveCoffeeButton,
	SubmitButton,
	TrashIcon,
} from "./styles";

import { Text } from "@/components/ui/Text";
import { Row } from "@/components/containers/Row";
import { Col } from "@/components/containers/Col";

import { InputNumber } from "@/components/ui/InputNumber";
import { useContextSelector } from "use-context-selector";
import { CoffeeContext } from "@/contexts/CoffeesContext";
import { OrderContext } from "@/contexts/OrderContext";
import { Alert } from "@/utils/Alert";
import { formatCurrency } from "@/utils/Format";
import { useCallback, useMemo } from "react";

export function CardCoffeeCheckout() {
	const changeCoffeeQuantityOrder = useContextSelector(OrderContext, (context) => {
		return context.changeCoffeeQuantity;
	});

	const removeCoffeeInCart = useContextSelector(OrderContext, (context) => {
		return context.removeCoffee;
	});

	const coffees = useContextSelector(OrderContext, (context) => {
		return context.coffees;
	});

	const changeQuantityCoffee = useContextSelector(CoffeeContext, (context) => {
		return context.changeQuantityCoffee;
	});

	const deliveryPrice = 3.5;

	const totalCoffeesPrice: number = useMemo(() => {
		return coffees.reduce((acc, coffee) => {
			if (coffee?.quantity) acc += coffee.quantity * coffee.price;

			return acc;
		}, 0);
	}, [coffees]);

	console.log(totalCoffeesPrice);

	async function handleChangeCoffeeQuantity(value: number, coffee: ICoffee) {
		try {
			await changeCoffeeQuantityOrder(value, coffee);
			changeQuantityCoffee(value, coffee.id);
		} catch (err) {
			Alert.error("Ocorreu um error interno. Tente novamente mais tarde!");
			console.error(err);
		}
	}

	function handleRemoveCoffeeInCart(id: number) {
		removeCoffeeInCart(id);
	}

	return (
		<>
			{coffees.length > 0 ? (
				<div>
					<CardCoffeeCheckoutContainer>
						{coffees.map((coffee) => {
							return (
								<CardCoffeeCheckoutRow>
									<Col>
										<Row gap={20}>
											<img data-coffee-image src={coffee.image} />
											<div>
												<Text text={coffee.name} element="span" />
												<Row marginTop="0.5rem" wrapRow={true} gap={5}>
													<Col flex="1.5">
														<InputNumber
															value={coffee.quantity}
															onValueChange={(value) => handleChangeCoffeeQuantity(value, coffee)}
															wFull={true}
														/>
													</Col>
													<Col flex="2">
														<RemoveCoffeeButton wFull={true} onClick={() => handleRemoveCoffeeInCart(coffee.id)}>
															<TrashIcon /> <Text marginLeft="0.5rem" size="s" text="REMOVER" element="span" />
														</RemoveCoffeeButton>
													</Col>
												</Row>
											</div>
										</Row>
									</Col>
									<Col>
										<Text
											text={`R$${coffee.price.toFixed(2).toString().replace(".", ",")}`}
											element="strong"
											color="gray_700"
											weight="700"
										/>
									</Col>
								</CardCoffeeCheckoutRow>
							);
						})}
					</CardCoffeeCheckoutContainer>

					<Row gap={12} direction="column" marginTop="1.5rem">
						<Row justify="between">
							<Text text="Total de itens" size="s" element="span" color="gray_700" />
							<Text text={formatCurrency(totalCoffeesPrice)} size="m" element="span" color="gray_700" />
						</Row>
						<Row justify="between">
							<Text text="Entrega" size="s" element="span" color="gray_700" />
							<Text text={formatCurrency(deliveryPrice)} size="m" element="span" color="gray_700" />
						</Row>
						<Row justify="between">
							<Text text="Total" size="l" element="span" color="gray_700" weight="bold" />
							<Text
								text={formatCurrency(totalCoffeesPrice + deliveryPrice)}
								size="l"
								element="span"
								color="gray_700"
								weight="bold"
							/>
						</Row>
					</Row>

					<SubmitButton form="payment-form">Confirmar pedido</SubmitButton>
				</div>
			) : (
				<Text text="Selecione ao menos um café :)" />
			)}
		</>
	);
}
