import { Container } from "@/components/wrappers/Container";

import { Text } from "@/components/ui/Text";
import { Row } from "@/components/containers/Row";
import { Col } from "@/components/containers/Col";

import { CardInfos, FinishedContainer } from "./styles";

import deliveredImg from "@assets/images/delivered.svg";

import { Button } from "@/components/ui/Button";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContextSelector } from "use-context-selector";
import { OrderContext } from "@/contexts/OrderContext";

const paymentOptions = {
  CASH: "À Vista",
  CREDIT: "Cartão de Crédito",
  DEBIT: "Débito",
} as const;

export function Finished() {
  const address = useContextSelector(OrderContext, (context) => {
    return context.address;
  });
  const paymentMode = useContextSelector(OrderContext, (context) => {
    return context.paymentMode;
  });
  return (
    <FinishedContainer>
      <Container>
        <Text
          marginTop="5rem"
          text="Uhu! Pedido confirmado"
          color="yellow_900"
          element="h1"
          fontFamily="BALOO"
          size="l"
        />
        <Text
          text="Agora é só aguardar que logo o café chegará até você"
          element="p"
          size="l"
        />
        <Row
          marginTop="2.5rem"
          gap={30}
          justify="between"
          wrapRow={true}
          data-row-finished-container
        >
          <Col>
            <CardInfos>
              <Row padding="2.5rem" direction="column">
                <Row gap={12} marginBottom="2rem">
                  <Col>
                    <Button background="purple_500" rounded>
                      <MapPin size={22} weight="fill" color="white" />
                    </Button>
                  </Col>
                  <Col>
                    <Text element="p">
                      Entrega em
                      <Text
                        text={` ${address.street}-${address.number}`}
                        element="strong"
                        weight="bold"
                        color="gray_700"
                      />
                    </Text>
                    <Text
                      text={`${address.city}, ${address.federatedUnit}`}
                      element="span"
                    />
                  </Col>
                </Row>

                <Row gap={12} marginBottom="2rem">
                  <Col>
                    <Button background="yellow_500" rounded>
                      <Timer size={22} weight="fill" color="white" />
                    </Button>
                  </Col>
                  <Col>
                    <Text text="Previsão de entrega" element="p" />
                    <Text
                      text="20 min - 30 min "
                      element="strong"
                      weight="bold"
                      color="gray_700"
                    />
                  </Col>
                </Row>

                <Row gap={12}>
                  <Col>
                    <Button background="yellow_900" rounded>
                      <CurrencyDollar size={22} weight="fill" color="white" />
                    </Button>
                  </Col>
                  <Col>
                    <Text text="Pagamento na entrega" element="p" />
                    <Text
                      text={paymentOptions[paymentMode]}
                      element="strong"
                      weight="bold"
                      color="gray_700"
                    />
                  </Col>
                </Row>
              </Row>
            </CardInfos>
          </Col>

          <Col>
            <Row justify="center">
              <img
                src={deliveredImg}
                alt="Delivery in transport"
                data-delivered-image
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </FinishedContainer>
  );
}
