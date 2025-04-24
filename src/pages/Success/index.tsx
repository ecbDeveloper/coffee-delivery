import { CurrencyDollar } from "@phosphor-icons/react";
import { DifferentiatorIcons } from "../Home/styles";
import { BoldFont, DeliveryLocation, GridContainer, MainOrderInfos, SuccessMessage, Wrapper } from "./styles";
import deliveryImage from "../../assets/delivery.svg"
import { paymentName } from "../../components/Form/PaymentsType/payment-name";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface SuccessOrder {
	street: string
	number: string
	city: string
	state: string
	paymentMethod: 'credit' | 'debit' | 'cash';
}

export function Success() {
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if (!location.state) {
			navigate("/", { replace: true });
		}
	}, [location.state, navigate]);


	let orderData: SuccessOrder | undefined
	if (location.state) {
		orderData = location.state.order
		console.log(orderData)
	}

	if (!orderData) {
		return <h1>Loading...</h1>
	}

	return (
		<GridContainer>
			<div>
				<SuccessMessage>
					<h1>Uhu! Pedido confirmado</h1>
					<p>Agora é so aguardar que logo o café chegara até você</p>
				</SuccessMessage>

				<MainOrderInfos>
					<Wrapper>
						<DifferentiatorIcons color="yellow-700">
							<CurrencyDollar size={16} />
						</DifferentiatorIcons>
						<div>
							<DeliveryLocation>
								<p>Entrega em</p>
								<BoldFont>{orderData.street}, {orderData.number}</BoldFont>
							</DeliveryLocation>
							<p>{orderData.city}, {orderData.state}</p>
						</div>
					</Wrapper>

					<Wrapper>
						<DifferentiatorIcons color="purple-500">
							<CurrencyDollar size={16} />
						</DifferentiatorIcons>
						<div>
							<p>Previsão de entrega</p>
							<BoldFont>20 min - 30 min</BoldFont>
						</div>
					</Wrapper>

					<Wrapper>
						<DifferentiatorIcons color="yellow-500">
							<CurrencyDollar size={16} />
						</DifferentiatorIcons>
						<div>
							<p>Pagamento na entrega</p>
							<BoldFont>{paymentName[orderData.paymentMethod]}</BoldFont>
						</div>
					</Wrapper>
				</MainOrderInfos>
			</div>
			<img src={deliveryImage} alt="" />
		</GridContainer>

	)
}