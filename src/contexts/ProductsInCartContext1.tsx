import { PropsWithChildren, useEffect, useState } from "react";
import { Coffes, ProductsInCart, ProductsInCartContext } from "./Contexts";

export function ProductsProvider({ children }: PropsWithChildren) {
	const [productsInCart, setProductsInCart] = useState<ProductsInCart[]>(() => {
		const productsInCart = localStorage.getItem('cart');
		return productsInCart ? JSON.parse(productsInCart) : [];
	});

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(productsInCart));
	}, [productsInCart]);

	function addProductInCart(coffe: Coffes, quantity: number) {
		setProductsInCart((state) => {
			const productIndex = state.findIndex((obj) => obj.coffe.coffeName === coffe.coffeName);

			if (productIndex >= 0) {
				const newState = [...state];
				newState[productIndex].quantity += quantity;
				return newState;
			}


			return [...state, { coffe, quantity }];
		})
	}

	function removeProductFromCart(coffeName: string) {

		setProductsInCart((state) => {
			const productIndex = state.findIndex((obj) => obj.coffe.coffeName === coffeName)

			if (productIndex >= 0) {
				const newState = [...state]

				newState.splice(productIndex, 1)
				return newState
			}

			return state
		})
	}

	function updateProductQuantity(coffeName: string, quantity: number) {
		setProductsInCart((state) => {
			const productIndex = state.findIndex((obj) => obj.coffe.coffeName === coffeName)

			if (productIndex >= 0) {
				const newState = [...state]
				const product = newState[productIndex]

				newState[productIndex] = { ...product, quantity }

				return newState
			}

			return state
		})
	}

	function redefineCart() {
		setProductsInCart([])
	}

	return (
		<ProductsInCartContext.Provider value={{
			addProductInCart,
			removeProductFromCart,
			products: productsInCart,
			updateProductQuantity,
			redefineCart
		}}>
			{children}
		</ProductsInCartContext.Provider>
	)
}