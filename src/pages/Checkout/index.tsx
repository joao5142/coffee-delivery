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
  SelectPayment,
} from "./styles";

import { Text } from "@/components/ui/Text";
import { Row } from "@components/containers/Row/index";
import { Col } from "@/components/containers/Col";

import { Form } from "./components/Form";
import { CardCoffeeCheckout } from "./components/CardCoffeeCheckout";

import { Alert } from "@/utils/Alert";

import { PAYMENT_OPTION } from "@/reducers/order/reducer";

import { OrderContext } from "@/contexts/OrderContext";
import { CoffeeContext } from "@/contexts/CoffeesContext";

import { useContextSelector } from "use-context-selector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeCoffeesStorage } from "@/storage/coffees/removeCoffees";
import { removeOrderStorage } from "@/storage/order/removeOrder";

import * as RadioGroup from "@radix-ui/react-radio-group";

export function Checkout() {
  const paymentModeSelected = useContextSelector(OrderContext, (context) => {
    return context.paymentMode;
  });

  const [paymentOption, setPaymentOption] =
    useState<PAYMENT_OPTION>(paymentModeSelected);

  const changePaymentMode = useContextSelector(OrderContext, (context) => {
    return context.setPaymentMode;
  });

  const finishOrder = useContextSelector(OrderContext, (context) => {
    return context.setFinishOrder;
  });

  const setCoffeesToInitialState = useContextSelector(
    CoffeeContext,
    (context) => {
      return context.setCoffeesToInitialState;
    }
  );

  const navigate = useNavigate();

  async function handleSelectPaymentMode(payment: PAYMENT_OPTION) {
    setPaymentOption(payment);
    await changePaymentMode(payment);
  }

  async function handleNavigateFinishedOrder() {
    try {
      if (paymentOption) {
        await finishOrder();

        removeCoffeesStorage();
        removeOrderStorage();

        setCoffeesToInitialState();

        navigate("/finished");
      } else {
        Alert.error("Selecione um meio de pagamento!");
      }
    } catch (error) {
      Alert.error(
        "Não foi possivel alterar o endereço. Tente novamente mais tarde!"
      );
    }
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
                onFormSubmit={() => handleNavigateFinishedOrder()}
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
              <RadioGroup.Root>
                <Row gap={30} marginTop="2rem" align="center" wrapRow={true}>
                  <Col flex="1">
                    <SelectPayment value={PAYMENT_OPTION.CREDIT} asChild>
                      <Select
                        onClick={() =>
                          handleSelectPaymentMode(PAYMENT_OPTION.CREDIT)
                        }
                      >
                        <CreditIcon />
                        Cartão de crédito
                      </Select>
                    </SelectPayment>
                  </Col>
                  <Col flex="1">
                    <SelectPayment value={PAYMENT_OPTION.DEBIT} asChild>
                      <Select
                        onClick={() =>
                          handleSelectPaymentMode(PAYMENT_OPTION.DEBIT)
                        }
                      >
                        <BankIcon />
                        Cartão de débito
                      </Select>
                    </SelectPayment>
                  </Col>
                  <Col flex="1">
                    <SelectPayment value={PAYMENT_OPTION.CASH} asChild>
                      <Select
                        onClick={() =>
                          handleSelectPaymentMode(PAYMENT_OPTION.CASH)
                        }
                      >
                        <MoneyIcon />
                        Dinheiro
                      </Select>
                    </SelectPayment>
                  </Col>
                </Row>
              </RadioGroup.Root>
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
              <CardCoffeeCheckout />
            </CardContainer>
          </Col>
        </Row>
      </Container>
    </CheckoutContainer>
  );
}
