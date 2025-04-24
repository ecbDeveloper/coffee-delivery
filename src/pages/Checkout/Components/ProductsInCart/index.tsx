import { ChangeEvent, useEffect, useState } from "react";
import { useProductsInCart } from "../../../../contexts/Contexts";
import { PriceContainer, ProductCount, RemoveProductButton, SelectedProduct } from "./styles";
import { Trash } from "@phosphor-icons/react";

export interface CheckoutProductProps {
	imgUrl: string,
	coffeName: string,
	quantity: number
}

export function ProductsInCart({ coffeName, imgUrl, quantity }: CheckoutProductProps) {
	const { removeProductFromCart, updateProductQuantity } = useProductsInCart()
	const [productCount, setProductCount] = useState(0)

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setProductCount(Number(e.target.value))
		updateProductQuantity(coffeName, Number(e.target.value))
	}

	useEffect(() => {
		setProductCount(quantity)
	}, [quantity])

	return (
		<SelectedProduct>
			<img src={imgUrl} alt="" />
			<PriceContainer>
				<div>
					<p>{coffeName}</p>
					<ProductCount>
						<input
							type="number"
							id="quantity"
							value={productCount}
							onChange={handleChange}
							min={1}
							max={10}
						/>
						<RemoveProductButton onClick={() => {
							removeProductFromCart(coffeName)
						}}>
							<Trash size={16} color='#8047F8' />
							REMOVER
						</RemoveProductButton>
					</ProductCount>
				</div>
				<h3>R$ 9,90</h3>
			</PriceContainer>
		</SelectedProduct>
	)
}