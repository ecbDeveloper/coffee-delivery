import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { AddresForm, AddressContainer, BoxHeader, CheckoutContainer, CheckoutFormSubTitle, CheckoutFormTitle, InfosToCompleteOrderContainer, Input, OrderInfoContainer, OrderPriceContainer, PaymentsContainer, PaymentsForm, PriceContainer, Select, SelectedProductsContainer } from './styles.ts'
import { PaymentsType } from '../../components/Form/PaymentsType/index.tsx'
import { ProductsInCart } from './Components/ProductsInCart/index.tsx'
import { useProductsInCart } from '../../contexts/Contexts.tsx'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const UFs = [
	"AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
	"MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
	"RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
]

const OrderFormSchema = z.object({
	zip: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido. Use o formato 00000-000 ou 00000000."),
	street: z.string().min(5),
	number: z.number().min(1, { message: "Preencha o campo número para finalizar o pedido" }),
	complement: z.string(),
	neighborhood: z.string().min(1, { message: "Preencha o bairro número para finalizar o pedido" }),
	city: z.string().min(1, { message: "Preencha o cidade número para finalizar o pedido" }),
	state: z.string().toUpperCase()
		.refine((uf) => UFs.includes(uf), {
			message: "UF inválida.",
		}),
	paymentMethod: z.string()
		.refine((method) =>
			['credit', 'debit', 'cash'].includes(method)
			, { message: "Selecione o método de para finalizar o pedido" }),
})

type Orderform = z.infer<typeof OrderFormSchema>;


export function Checkout() {
	const { products, redefineCart } = useProductsInCart()
	const navigate = useNavigate()
	const [productsCount, setProductsCount] = useState(0)
	const [productsValue, setProductsValue] = useState(0.0)
	const [totalValue, setTotalValue] = useState(0.0)
	const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
	const { register, handleSubmit, control, formState: { errors } } = useForm({
		resolver: zodResolver(OrderFormSchema),
		defaultValues: {
			city: localStorage.getItem("city") || "",
			state: localStorage.getItem("state") || "",
			number: undefined
		},
		criteriaMode: "all"
	})


	useEffect(() => {
		const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0)
		const totalValue = products.reduce((acc, product) => acc + product.quantity * 9.90, 0)

		setProductsCount(totalQuantity)
		setProductsValue(totalValue)
		setTotalValue(totalValue + 3.5)
	}, [products, productsCount, productsValue])


	const formattedProductsValue = productsValue.toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})

	const formattedTotalValue = totalValue.toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})

	function onSubmit(data: Orderform) {
		if (products.length <= 0) {
			toast.error('Adicione produtos ao carrinho para efetuar pedido', {
				style: {
					background: 'red',
					color: 'white',
					border: 'none',
					fontSize: 14,
				},
				duration: 3000,
			})
		}
		localStorage.setItem("city", data.city)
		localStorage.setItem("state", data.state)

		toast.success('Pedido efetuado com sucesso!', {
			style: {
				background: 'green',
				color: 'white',
				border: 'none',
				fontSize: 14,
			},
			duration: 3000
		})


		redefineCart()

		navigate("/success", { state: { order: data } })
	}

	function onError() {
		Object.entries(errors).forEach(([field, error]) => {
			if (error?.message) {
				toast.error(error.message, { id: field })
			}
		})
	}

	return (
		<CheckoutContainer>
			<InfosToCompleteOrderContainer>
				<h3>Complete seu pedido</h3>
				<form id='order' onSubmit={handleSubmit(onSubmit, onError)}>
					<AddressContainer>
						<BoxHeader>
							<MapPinLine size={22} color='#C47F17' />
							<div>
								<CheckoutFormTitle>Endreço de entrega</CheckoutFormTitle>
								<CheckoutFormSubTitle>Informe o endereço onde deseja receber seu pedido</CheckoutFormSubTitle>
							</div>
						</BoxHeader>

						<AddresForm >

							<Input type="text" placeholder='CEP' style={{ gridArea: 'cep' }} {...register('zip')} />
							<Input type="text" placeholder='Rua' style={{ gridArea: 'street' }} {...register('street')} />
							<Input type="text" placeholder='Número' style={{ gridArea: 'number' }}  {...register('number', { valueAsNumber: true })} />
							<Input type="text" placeholder='Complemento' style={{ gridArea: 'complemento' }}  {...register('complement')} />
							<Input type="text" placeholder='Bairro' style={{ gridArea: 'neighborhood' }} {...register('neighborhood')} />
							<Input type="text" placeholder='Cidade' style={{ gridArea: 'city' }}  {...register('city')} />
							<Select style={{ gridArea: 'state' }} {...register('state')} >
								<option value="" disabled>
									UF
								</option>
								{UFs.map(UF => (
									<option key={UF} value={UF}>
										{UF}
									</option>
								))}
							</Select>
						</AddresForm>
					</AddressContainer>

					<PaymentsContainer>
						<BoxHeader>
							<CurrencyDollar size={22} color='#8047F8' />
							<div>
								<CheckoutFormTitle>Pagamento</CheckoutFormTitle>
								<CheckoutFormSubTitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CheckoutFormSubTitle>
							</div>
						</BoxHeader>

						<PaymentsForm>
							<Controller
								name="paymentMethod"
								control={control}
								defaultValue=""
								render={({ field }) => {
									function handleSelectAndSetVisual(paymentId: string) {
										field.onChange(paymentId);
										setSelectedPayment(paymentId);
									}

									return (
										<>
											<PaymentsType
												inputId='credit'
												isSelected={selectedPayment === 'credit'}
												onSelect={handleSelectAndSetVisual}
											/>
											<PaymentsType
												inputId='debit'
												isSelected={selectedPayment === 'debit'}
												onSelect={handleSelectAndSetVisual}
											/>
											<PaymentsType
												inputId='cash'
												isSelected={selectedPayment === 'cash'}
												onSelect={handleSelectAndSetVisual}
											/>
										</>
									)
								}}
							/>
						</PaymentsForm>
					</PaymentsContainer>
				</form>
			</InfosToCompleteOrderContainer>

			<SelectedProductsContainer>
				<h3>Cafés selecionados</h3>

				<OrderInfoContainer>
					<OrderPriceContainer>
						{
							products.map(product => (
								<ProductsInCart coffeName={product.coffe.coffeName} imgUrl={product.coffe.imgUrl} quantity={product.quantity} key={product.coffe.coffeName} />
							))
						}
						<PriceContainer>
							<p>Total dos itens</p>
							<p>R$ {formattedProductsValue}</p>
						</PriceContainer>
						<PriceContainer>
							<p>Entrega</p>
							<p>R$ 3,50</p>
						</PriceContainer>
						<PriceContainer>
							<h3>Total</h3>
							<h3>R$ {formattedTotalValue}</h3>
						</PriceContainer>
					</OrderPriceContainer>
					<button form='order' disabled={products.length <= 0} type='submit'>CONFIRMAR PEDIDO</button>
				</OrderInfoContainer>
			</SelectedProductsContainer>
		</CheckoutContainer >
	)
}