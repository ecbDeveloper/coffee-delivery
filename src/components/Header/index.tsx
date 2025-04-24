import { Address, CartCounter, HeaderContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { CheckoutCartNavLink } from "../CheckoutCart/styles";
import { useProductsInCart } from "../../contexts/Contexts";

export function Header() {
	const { products } = useProductsInCart()
	const city = localStorage.getItem("city")
	const state = localStorage.getItem("state")

	return (
		<HeaderContainer>
			<NavLink to='/'>
				<img src={logo} alt="" />
			</NavLink>
			<nav>
				{
					city && state &&
					<Address>
						<MapPin size={24} color="#8047F8" weight="fill" />
						<span>{city}, {state}</span>
					</Address>
				}
				<CheckoutCartNavLink to='/checkout' title="Carrinho">
					<ShoppingCartSimple size={24} color="#C47F17" weight="fill" />
					{
						products.length > 0 && <CartCounter>{products.length}</CartCounter>
					}
				</CheckoutCartNavLink>
			</nav>
		</HeaderContainer>
	)
}