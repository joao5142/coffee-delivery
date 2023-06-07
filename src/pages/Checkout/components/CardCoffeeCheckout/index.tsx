import { ICoffee } from "@/mocks/coffees";

import {
  CardCoffeeCheckoutContainer,
  RemoveCoffeeButton,
  TrashIcon,
} from "./styles";

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
            <img data-coffee-image src={coffee.image} />
            <div>
              <Text text="Expresso Tradicional" element="span" />
              <Row marginTop="0.5rem">
                <Col flex="1.5">
                  <InputNumber />
                </Col>
                <Col flex="2">
                  <RemoveCoffeeButton>
                    <TrashIcon />{" "}
                    <Text
                      marginLeft="0.5rem"
                      size="s"
                      text="REMOVER"
                      element="span"
                    />
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
      </Row>
    </CardCoffeeCheckoutContainer>
  );
}
