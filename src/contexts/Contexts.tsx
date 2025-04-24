import { createContext, useContext } from "react"

export interface Coffes {
	coffeName: string
	coffeType: string[]
	imgUrl: string
}

export interface ProductsInCart {
	coffe: Coffes
	quantity: number
}

interface ProductsInCartContextType {
	addProductInCart: (coffe: Coffes, quantity: number) => void
	removeProductFromCart: (coffeName: string) => void
	updateProductQuantity: (coffeName: string, quantity: number) => void
	redefineCart: () => void
	products: ProductsInCart[] | []
}

export const ProductsInCartContext = createContext({} as ProductsInCartContextType)

export const useProductsInCart = () => useContext(ProductsInCartContext)