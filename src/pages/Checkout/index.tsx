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
  SubmitButton,
} from "./styles";

import { Text } from "@/components/ui/Text";
import { Row } from "@components/containers/Row/index";
import { Col } from "@/components/containers/Col";

import { Form, FormAddressSchemaType } from "./components/Form";

import { CardCoffeeCheckout } from "./components/CardCoffeeCheckout";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { OrderContext } from "@/contexts/OrderContext";
import { useContextSelector } from "use-context-selector";

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
  const coffees = useContextSelector(OrderContext, (context) => {
    return context.coffees;
  });

  console.log(coffees);

  const [paymentOption, setPaymentOption] = useState<PAYMENT_OPTION>();
  const navigate = useNavigate();

  function handleSelectPaymentMode(payment: PAYMENT_OPTION) {
    setPaymentOption(payment);
  }

  function handleNavigateFinishedOrder(data: FormAddressSchemaType) {
    navigate("/finished");
  }
  return (
    <CheckoutContainer>
      <Container>
        <Row gap={32} marginTop="3.2rem" justify="between" wrapRow={true}>
          <Col flex="2">
            <Text
              text="Complete seu pedido"
              weight="bold"
              marginBottom="0.95rem"
              element="h4"
              size="m"
              fontFamily="BALOO"
            />
            <CardContainer data-form-card>
              <Row gap={10}>
                <MapPinIcon />
                <div>
                  <Text
                    text="Endereço de Entrega"
                    size="m"
                    element="h4"
                    color="gray_800"
                  />
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

              <Form
                id="payment-form"
                onFormSubmit={(data) => handleNavigateFinishedOrder(data)}
              />
            </CardContainer>
            <CardContainer marginTop="0.75rem">
              <Row gap={10}>
                <DollarIcon />
                <div>
                  <Text
                    text="Pagamento"
                    size="m"
                    element="h4"
                    color="gray_800"
                  />
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
              <Row gap={30} marginTop="2rem" align="center" wrapRow={true}>
                <Col flex="1">
                  <Select
                    onClick={() =>
                      handleSelectPaymentMode(PAYMENT_OPTION.CREDIT)
                    }
                    isActive={paymentOption == PAYMENT_OPTION.CREDIT}
                  >
                    <CreditIcon />
                    Cartão de crédito
                  </Select>
                </Col>
                <Col flex="1">
                  <Select
                    onClick={() =>
                      handleSelectPaymentMode(PAYMENT_OPTION.DEBIT)
                    }
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
            <CardContainer data-card-selected-coffees>
              <CardCoffeeCheckout coffee={coffee} />

              <Row gap={12} direction="column" marginTop="1.5rem">
                <Row justify="between">
                  <Text
                    text="Total de itens"
                    size="s"
                    element="span"
                    color="gray_700"
                  />
                  <Text
                    text="R$ 29,70"
                    size="m"
                    element="span"
                    color="gray_700"
                  />
                </Row>
                <Row justify="between">
                  <Text
                    text="Entrega"
                    size="s"
                    element="span"
                    color="gray_700"
                  />
                  <Text
                    text="R$ 3,50"
                    size="m"
                    element="span"
                    color="gray_700"
                  />
                </Row>
                <Row justify="between">
                  <Text
                    text="Total"
                    size="l"
                    element="span"
                    color="gray_700"
                    weight="bold"
                  />
                  <Text
                    text="R$ 33,20"
                    size="l"
                    element="span"
                    color="gray_700"
                    weight="bold"
                  />
                </Row>
              </Row>

              <SubmitButton form="payment-form">Confirmar pedido</SubmitButton>
            </CardContainer>
          </Col>
        </Row>
      </Container>
    </CheckoutContainer>
  );
}
