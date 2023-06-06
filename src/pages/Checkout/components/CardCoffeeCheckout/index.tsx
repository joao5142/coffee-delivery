import { ICoffee } from "@/mocks/coffees";

import { CardCoffeeCheckoutContainer, RemoveCoffeeButton, TrashIcon } from "./styles";

import { Text } from "@/components/ui/Text";
import { Row } from "@/components/containers/Row";
import { Col } from "@/components/containers/Col";

import { InputNumber } from "@/components/ui/InputNumber";

interface CardCoffeeCheckoutProps {
	coffee: ICoffee;
}

export function CardCoffeeCheckout({ coffee }: CardCoffeeCheckoutProps) {
	return (
		<CardCoffeeCheckoutContainer>
			<Row justify="between">
				<Col>
					<Row gap={20}>
						<img src={coffee.image} />
						<div>
							<Text text="Expresso Tradicional" element="span" />
							<Row marginTop="0.5rem">
								<InputNumber />
								<RemoveCoffeeButton>
									<TrashIcon /> REMOVER
								</RemoveCoffeeButton>
							</Row>
						</div>
					</Row>
				</Col>
				<Col>
					<Text text={coffee.price.toString()} element="strong" weight="bold" />
				</Col>
			</Row>
		</CardCoffeeCheckoutContainer>
	);
}
