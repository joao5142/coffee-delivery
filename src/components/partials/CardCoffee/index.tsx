import { Text } from "@/components/ui/Text";
import { CardCoffeeContainer, CoffeeTag } from "./styles";

export function CardCoffee() {
  return (
    <CardCoffeeContainer>
      <img src="/assets/images/coffees/coffee-1.png" alt="" />

      <Text
        text="Expresso Tradicional"
        element="h4"
        fontFamily="BALOO"
        color="gray_800"
        size="s"
      />

      <CoffeeTag>Tradicional</CoffeeTag>
      <Text
        text="O tradicional café feito com água quente e grãos moídos"
        element="p"
        color="gray_600"
        size="s"
      />
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
    </CardCoffeeContainer>
  );
}
