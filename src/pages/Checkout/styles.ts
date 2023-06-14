import styled, { css } from "styled-components";

import { Card } from "@/styles/global";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.div`
  @media (max-width: 1200px) {
    [data-form-card] {
      min-width: 500px;
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    [data-form-card] {
      min-width: 90vw;
      width: 100%;
    }
    [data-card-selected-coffees] {
      width: 100%;
    }
  }
`;

export const CardContainer = styled(Card)``;

export const MapPinIcon = styled(MapPinLine).attrs(({ theme }) => ({
  size: 22,
  color: theme.colors.yellow_500,
}))``;

export const DollarIcon = styled(CurrencyDollar).attrs(({ theme }) => ({
  size: 22,
  color: theme.colors.purple_500,
}))``;

export const SelectPayment = styled(RadioGroup.Item)`
  width: 100%;
`;

export const Select = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  height: 51px;
  padding: 1rem;
  width: 100%;
  min-width: 11.5625rem;

  background: ${({ theme }) => theme.colors.gray_400};

  font-size: ${({ theme }) => theme.font_size.ROBOTO.button_g}rem;
  color: ${({ theme }) => theme.colors.gray_700};

  text-transform: uppercase;

  border-radius: 6px;
  border: 1px solid transparent;

  cursor: pointer;

  &[data-state="checked"] {
    background: ${({ theme }) => theme.colors.purple_100};
    border: 1px solid ${({ theme }) => theme.colors.purple_500};
  }
`;

export const CreditIcon = styled(CreditCard).attrs(({ theme }) => ({
  size: 22,
  color: theme.colors.purple_500,
}))``;

export const BankIcon = styled(Bank).attrs(({ theme }) => ({
  size: 22,
  color: theme.colors.purple_500,
}))``;

export const MoneyIcon = styled(Money).attrs(({ theme }) => ({
  size: 22,
  color: theme.colors.purple_500,
}))``;
