import { Container } from "@components/wrappers/Container";

import { CartButton, HeaderContainer, HeaderList, LocationButton, MapPinIcon, ShoppingCartIcon } from "./styles";

import logo from "@assets/images/logo.svg";

import { Row } from "@/components/containers/Row";

import { useNavigate } from "react-router-dom";

export function Header() {
	const navigate = useNavigate();

	function handleNavigateHome() {
		navigate("/");
	}
	function handleNavigateCheckout() {
		navigate("/checkout");
	}
	return (
		<HeaderContainer>
			<Container>
				<Row align="center" justify="between">
					<img src={logo} onClick={handleNavigateHome} data-logo />

					<HeaderList>
						<LocationButton>
							<MapPinIcon />
							<span>Porto Alegre, RS</span>
						</LocationButton>

						<CartButton data-quantity-coffee-in-cart={5} onClick={handleNavigateCheckout}>
							<ShoppingCartIcon />
						</CartButton>
					</HeaderList>
				</Row>
			</Container>
		</HeaderContainer>
	);
}
