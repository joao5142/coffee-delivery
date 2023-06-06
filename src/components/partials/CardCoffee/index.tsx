import { Text } from "@/components/ui/Text";
import { CardCoffeeContainer, CoffeeTag, ImageCoffee } from "./styles";
import { InputNumber } from "@/components/ui/InputNumber";
import { Button } from "@/components/ui/Button";
import { ShoppingCartIcon } from "../Header/styles";
import { Row } from "@/components/containers/Row";

export function CardCoffee() {
  return (
    <CardCoffeeContainer>
      <ImageCoffee src="/assets/images/coffees/coffee-1.png" alt="" />

      <CoffeeTag>Tradicional</CoffeeTag>

      <Text
        marginBottom="0.5rem"
        text="Expresso Tradicional"
        element="h4"
        fontFamily="BALOO"
        color="gray_800"
        size="s"
      />

      <Text
        text="O tradicional café feito com água quente e grãos moídos"
        element="p"
        color="gray_600"
        size="s"
      />
      <Row gap={20} marginTop="2.0625rem">
        <div>
          <Text marginRight="0.25rem" text="R$" size="m" element="span" />
          <Text
            text="9,90"
            fontFamily="BALOO"
            size="m"
            element="span"
            color="gray_700"
          />
        </div>
        <InputNumber />
        <Button background="purple_900">
          <ShoppingCartIcon size={22} color="white" />
        </Button>
      </Row>
    </CardCoffeeContainer>
  );
}
