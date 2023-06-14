import { Container } from "@/components/wrappers/Container";
import { Row } from "@/components/containers/Row";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { Col } from "@/components/containers/Col";
import { CardCoffee } from "@/components/partials/CardCoffee";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { BannerSection, GridContainer, MainContainer } from "./styles";

import { useContextSelector } from "use-context-selector";

import { CoffeeContext } from "@/contexts/CoffeesContext";

import coffeeDeliveryImage from "@assets/images/coffe-delivery.png";

export function Home() {
  const coffees = useContextSelector(CoffeeContext, (context) => {
    return context.coffees;
  });

  return (
    <MainContainer>
      <BannerSection>
        <Container>
          <Row justify="between" data-row-banner-container>
            <Col flex="1">
              <Text
                size="xl"
                fontFamily="BALOO"
                element="h1"
                text="Encontre o café perfeito para qualquer hora do dia"
              />
              <Text
                marginTop="1rem"
                marginBottom="4rem"
                fontFamily="ROBOTO"
                size="l"
                text="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
                element="p"
              />

              <Row gap={40} marginBottom="1.5rem" data-option-items>
                <div>
                  <Row gap={10} marginBottom="1.5rem" align="center">
                    <Button background="yellow_900" rounded>
                      <ShoppingCart size={22} weight="fill" color="white" />{" "}
                    </Button>
                    <Text element="span" text="Compra simples e segura" />
                  </Row>
                  <Row gap={10} marginBottom="1.5rem" align="center">
                    <Button background="yellow_500" rounded>
                      <Timer size={22} weight="fill" color="white" />{" "}
                    </Button>
                    <Text element="span" text="Entrega rápida e rastreada" />
                  </Row>
                </div>

                <div>
                  <Row gap={10} marginBottom="1.5rem" align="center">
                    <Button background="gray_700" rounded>
                      <Package size={22} weight="fill" color="white" />{" "}
                    </Button>
                    <Text
                      element="span"
                      text="Embalagem mantém o café intacto"
                    />
                  </Row>
                  <Row gap={10} marginBottom="1.5rem" align="center">
                    <Button background="purple_500" rounded>
                      <Coffee size={22} weight="fill" color="white" />{" "}
                    </Button>
                    <Text
                      element="span"
                      text="O café chega fresquinho até você"
                    />
                  </Row>
                </div>
              </Row>
            </Col>
            <Col flex="1">
              <Row justify="center" data-container-coffee-image>
                <img
                  src={coffeeDeliveryImage}
                  alt="Copo  de café da coffeedelivery"
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </BannerSection>

      <section>
        <Container>
          <Text
            marginBottom="3.375rem"
            text="Nossos cafés"
            element="h2"
            fontFamily="BALOO"
            size="l"
          />
          <GridContainer>
            {coffees.map((coffee) => {
              return <CardCoffee key={coffee.id} coffee={coffee} />;
            })}
          </GridContainer>
        </Container>
      </section>
    </MainContainer>
  );
}
