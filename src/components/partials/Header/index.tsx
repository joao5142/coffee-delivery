import { Container } from "@components/wrappers/Container";

import {
  CartButton,
  HeaderContainer,
  HeaderList,
  LocationButton,
  MapPinIcon,
  ShoppingCartIcon,
} from "./styles";

import logo from "@assets/images/logo.svg";
import { Row } from "@/components/containers/Row";

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Row align="center" justify="between">
          <img src={logo} />

          <HeaderList>
            <LocationButton>
              <MapPinIcon />
              <span>Porto Alegre, RS</span>
            </LocationButton>

            <CartButton data-quantity-coffee-in-cart={5}>
              <ShoppingCartIcon />
            </CartButton>
          </HeaderList>
        </Row>
      </Container>
    </HeaderContainer>
  );
}
