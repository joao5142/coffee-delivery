import { ButtonContainer } from "@/components/ui/Button/styles";

import { MapPin, ShoppingCart } from "phosphor-react";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0rem;

  [data-logo] {
    cursor: pointer;
  }

  @media (max-width: 400px) {
    [data-logo] {
      width: 4rem;
    }
  }
`;

export const HeaderList = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const CartButton = styled(ButtonContainer).attrs(() => ({
  background: "yellow_100",
}))`
  position: relative;
  &::before {
    content: attr(data-quantity-coffee-in-cart);

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.colors.white};
    font-size: 0.9rem;
    font-weight: bold;

    position: absolute;
    right: -10px;
    top: -10px;

    width: 20px;
    height: 20px;

    background: ${(props) => props.theme.colors.yellow_900};

    border-radius: 50%;
  }
`;

export const LocationButton = styled(ButtonContainer).attrs(() => ({
  background: "purple_100",
}))`
  span {
    color: ${(props) => props.theme.colors.purple_500};
  }
`;

export const MapPinIcon = styled(MapPin).attrs(({ theme }) => ({
  weight: "fill",
  size: 22,
  color: theme.colors.purple_500,
}))`
  margin-right: 0.5rem;
`;

export const ShoppingCartIcon = styled(ShoppingCart).attrs(({ theme }) => ({
  weight: "fill",
  size: 22,
  color: theme.colors.yellow_900,
}))`
  cursor: pointer;
`;
