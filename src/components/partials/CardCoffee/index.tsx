import { Text } from "@/components/ui/Text";
import { InputNumber } from "@/components/ui/InputNumber";
import { Button } from "@/components/ui/Button";
import { Row } from "@/components/containers/Row";

import { HTMLAttributes } from "react";
import { useContextSelector } from "use-context-selector";

import {
  CardCoffeeContainer,
  CoffeeTag,
  ImageCoffee,
  ShoppingCartIcon,
} from "./styles";
import { OrderContext } from "@/contexts/OrderContext";
import { ICoffee } from "@/reducers/order/reducer";
import { CoffeeContext } from "@/contexts/CoffeesContext";
import { Alert } from "@/utils/Alert";

interface CardCoffeeProps extends HTMLAttributes<HTMLDivElement> {
  coffee: ICoffee;
}

export function CardCoffee({ coffee, ...rest }: CardCoffeeProps) {
  const addCoffeeToCart = useContextSelector(OrderContext, (context) => {
    return context.addCoffee;
  });

  const changeCoffeeQuantityOrder = useContextSelector(
    OrderContext,
    (context) => {
      return context.changeCoffeeQuantity;
    }
  );

  const changeQuantityCoffee = useContextSelector(CoffeeContext, (context) => {
    return context.changeQuantityCoffee;
  });

  async function handleAddCoffeeToCart() {
    try {
      await addCoffeeToCart(coffee);

      if (coffee.quantity == 0) {
        changeQuantityCoffee(1, coffee.id);
      }
    } catch (err) {
      Alert.error("Ocorreu um error interno. Tente novamente mais tarde!");
      console.error(err);
    }
  }

  async function handleChangeCoffeeQuantity(value: number) {
    try {
      await changeCoffeeQuantityOrder(value, coffee);
      changeQuantityCoffee(value, coffee.id);
    } catch (err) {
      Alert.error("Ocorreu um error interno. Tente novamente mais tarde!");
      console.error(err);
    }
  }

  return (
    <CardCoffeeContainer {...rest}>
      <ImageCoffee src={coffee.image} alt="" />

      <Row justify="center" gap={12}>
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
            text={coffee.price.toFixed(2).toString().replace(".", ",")}
            fontFamily="BALOO"
            size="m"
            element="span"
            color="gray_700"
          />
        </div>
        <InputNumber
          value={coffee.quantity}
          onValueChange={(value) => handleChangeCoffeeQuantity(value)}
        />
        <Button background="purple_900" onClick={handleAddCoffeeToCart}>
          <ShoppingCartIcon />
        </Button>
      </Row>
    </CardCoffeeContainer>
  );
}
