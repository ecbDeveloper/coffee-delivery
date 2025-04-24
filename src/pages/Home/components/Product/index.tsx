import { CoffeeInfo, CoffeeType, FlexDiv, ProductContainer, ProductPurchase, ProductValue, PurchaseControl } from "./styles";
import { CheckoutCartButton } from "../../../../components/CheckoutCart/styles";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useProductsInCart } from "../../../../contexts/Contexts";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export interface ProductProps {
	id?: string
	imgUrl: string,
	coffeType: string[],
	coffeName: string,
	coffeDescription: string,
}

export function Product({ imgUrl, coffeName, coffeType, coffeDescription }: ProductProps) {
	const { addProductInCart } = useProductsInCart()
	const [quantity, setQuantity] = useState(1)

	function handleSubmit(e: FormEvent) {
		e.preventDefault()

		toast.success('Produto(s) adicionados no carrinho!', {
			style: {
				background: 'green',
				color: 'white',
				border: 'none',
				fontSize: 14,
			},
			duration: 3000
		})

		addProductInCart({ coffeName, coffeType, imgUrl }, quantity)
	}

	function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
		setQuantity(Number(e.target.value))
	}

	return (
		<ProductContainer>
			<img src={imgUrl} alt="" />

			<FlexDiv>
				{
					coffeType.map(obj => (
						<CoffeeType key={obj}>
							<p>{obj}</p>
						</CoffeeType>
					))
				}
			</FlexDiv>

			<CoffeeInfo>
				<h3>{coffeName}</h3>
				<p>{coffeDescription}</p>
			</CoffeeInfo>

			<ProductPurchase>
				<ProductValue>
					<span>R$</span>
					<h2>9,90</h2>
				</ProductValue>
				<PurchaseControl onSubmit={handleSubmit}>
					<input
						type="number"
						id="quantity"
						placeholder="1"
						onChange={handleOnChange}
						value={quantity}
						min={1}
						max={10}
					/>

					<CheckoutCartButton type="submit">
						<ShoppingCartSimple size={24} color="#F3F2F2" weight="fill" />
					</CheckoutCartButton>
				</PurchaseControl>
			</ProductPurchase>
		</ProductContainer>
	)
}