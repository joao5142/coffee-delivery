import { Text } from "@/components/ui/Text";
import { InputNumber } from "@/components/ui/InputNumber";
import { Button } from "@/components/ui/Button";
import { Row } from "@/components/containers/Row";

import { ICoffee } from "@/mocks/coffees";

import {
  CardCoffeeContainer,
  CoffeeTag,
  ImageCoffee,
  ShoppingCartIcon,
} from "./styles";

interface CardCoffeeProps {
  coffee: ICoffee;
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  return (
    <CardCoffeeContainer>
      <ImageCoffee src={coffee.image} alt="" />

      <Row>
        {coffee.tags.map((tag) => {
          return <CoffeeTag key={tag}>{tag}</CoffeeTag>;
        })}
      </Row>

      <Text
        marginBottom="0.5rem"
        text={coffee.name}
        element="h4"
        fontFamily="BALOO"
        color="gray_800"
        size="s"
      />

      <Text text={coffee.description} element="p" color="gray_600" size="s" />

      <Row gap={20} marginTop="2.0625rem" justify="between">
        <div>
          <Text marginRight="0.25rem" text="R$" size="m" element="span" />
          <Text
            text={coffee.price.toString().replace(".", ",")}
            fontFamily="BALOO"
            size="m"
            element="span"
            color="gray_700"
          />
        </div>
        <InputNumber />
        <Button background="purple_900">
          <ShoppingCartIcon />
        </Button>
      </Row>
    </CardCoffeeContainer>
  );
}
