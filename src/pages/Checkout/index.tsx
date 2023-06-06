import { Container } from "@/components/wrappers/Container";

import {
	BankIcon,
	CardContainer,
	CheckoutContainer,
	CreditIcon,
	DollarIcon,
	MapPinIcon,
	MoneyIcon,
	Select,
} from "./styles";

import { Text } from "@/components/ui/Text";
import { Row } from "@components/containers/Row/index";
import { Col } from "@/components/containers/Col";

import { Form } from "./components/Form";

import { useState } from "react";
import { CardCoffeeCheckout } from "./components/CardCoffeeCheckout";

enum PAYMENT_OPTION {
	CREDIT,
	DEBIT,
	CASH,
}

const coffee = {
	id: 1,
	name: "Expresso Tradicional",
	description: "O tradicional café feito com água quente e grãos moídos",
	price: 9.9,
	tags: ["Tradicional"],
	image: "/assets/images/coffees/coffee-1.png",
};

export function Checkout() {
	const [paymentOption, setPaymentOption] = useState<PAYMENT_OPTION>();

	function handleSelectPaymentMode(payment: PAYMENT_OPTION) {
		setPaymentOption(payment);
	}

	return (
		<CheckoutContainer>
			<Container>
				<Row gap={32} marginTop="3.2rem" justify="between">
					<Col flex="2">
						<Text
							text="Complete seu pedido"
							weight="bold"
							marginBottom="0.95rem"
							element="h4"
							size="m"
							fontFamily="BALOO"
						/>
						<CardContainer>
							<Row gap={10}>
								<MapPinIcon />
								<div>
									<Text text="Endereço de Entrega" size="m" element="h4" color="gray_800" />
									<Text
										marginTop="0.3rem"
										text="Informe o endereço onde deseja receber seu pedido"
										size="s"
										element="p"
										fontFamily="ROBOTO"
										color="gray_700"
									/>
								</div>
							</Row>

							<Form />
						</CardContainer>
						<CardContainer marginTop="0.75rem">
							<Row gap={10}>
								<DollarIcon />
								<div>
									<Text text="Pagamento" size="m" element="h4" color="gray_800" />
									<Text
										marginTop="0.3rem"
										text="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
										size="s"
										element="p"
										fontFamily="ROBOTO"
										color="gray_700"
									/>
								</div>
							</Row>
							<Row gap={30} marginTop="2rem">
								<Col flex="1">
									<Select
										onClick={() => handleSelectPaymentMode(PAYMENT_OPTION.CREDIT)}
										isActive={paymentOption == PAYMENT_OPTION.CREDIT}
									>
										<CreditIcon />
										Cartão de crédito
									</Select>
								</Col>
								<Col flex="1">
									<Select
										onClick={() => handleSelectPaymentMode(PAYMENT_OPTION.DEBIT)}
										isActive={paymentOption == PAYMENT_OPTION.DEBIT}
									>
										<BankIcon />
										Cartão de débito
									</Select>
								</Col>
								<Col flex="1">
									<Select
										onClick={() => handleSelectPaymentMode(PAYMENT_OPTION.CASH)}
										isActive={paymentOption == PAYMENT_OPTION.CASH}
									>
										<MoneyIcon />
										Dinheiro
									</Select>
								</Col>
							</Row>
						</CardContainer>
					</Col>
					<Col flex="1">
						<Text
							text="Cafés selecionados"
							weight="bold"
							marginBottom="0.95rem"
							size="m"
							fontFamily="BALOO"
							element="h4"
						/>
						<CardContainer>
							<CardCoffeeCheckout coffee={coffee} />
						</CardContainer>
					</Col>
				</Row>
			</Container>
		</CheckoutContainer>
	);
}
