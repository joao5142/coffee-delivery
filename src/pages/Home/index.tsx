import { Container } from "@/components/wrappers/Container";
import { BannerSection, MainContainer } from "./styles";

import coffeeDeliveryImage from "@assets/images/coffe-delivery.png";
import { Row } from "@/components/containers/Row";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { ShoppingCart } from "phosphor-react";
import { CardCoffee } from "@/components/partials/CardCoffee";

export function Home() {
  return (
    <MainContainer>
      <BannerSection>
        <Container>
          <Row justify="between">
            <div>
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
                text="Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora"
                element="p"
              />

              <Row gap={40} marginBottom="1.5rem">
                <Row gap={10}>
                  <Button background="yellow_900" rounded>
                    <ShoppingCart size={22} weight="fill" color="white" />{" "}
                  </Button>
                  <Text element="span" text="Compra simples e segura" />
                </Row>
                <Row gap={10}>
                  <Button background="gray_700" rounded>
                    <ShoppingCart size={22} weight="fill" color="white" />{" "}
                  </Button>
                  <Text element="span" text="Embalagem mantém o café intacto" />
                </Row>
              </Row>
              <Row gap={40}>
                <Row gap={10}>
                  <Button background="yellow_500" rounded>
                    <ShoppingCart size={22} weight="fill" color="white" />{" "}
                  </Button>
                  <Text element="span" text="Entrega rápida e rastreada" />
                </Row>
                <Row gap={10}>
                  <Button background="purple_500" rounded>
                    <ShoppingCart size={22} weight="fill" color="white" />{" "}
                  </Button>
                  <Text
                    element="span"
                    text="O café chega fresquinho até você"
                  />
                </Row>
              </Row>
            </div>
            <img
              src={coffeeDeliveryImage}
              alt="Copo  de café da coffeedelivery"
            />
          </Row>
        </Container>
      </BannerSection>

      <section>
        <Container>
          <Text text="Nossos cafés" element="h2" fontFamily="BALOO" size="l" />

          <CardCoffee />
        </Container>
      </section>
    </MainContainer>
  );
}
