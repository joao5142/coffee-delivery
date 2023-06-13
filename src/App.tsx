import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";

import { OrderProvider } from "./contexts/OrderContext";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { CoffeeProvider } from "./contexts/CoffeesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeProvider>
          <OrderProvider>
            <Router />
          </OrderProvider>
        </CoffeeProvider>
      </BrowserRouter>

      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}
