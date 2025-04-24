import { ReactNode } from "react";
import { PaymentTypeContainer } from "./styles";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { paymentName } from "./payment-name";

export interface PaymentsTypeProps {
	inputId: 'credit' | 'debit' | 'cash';
	isSelected: boolean;
	onSelect: (id: string) => void;
}

const paymentIcons: Record<PaymentsTypeProps['inputId'], ReactNode> = {
	credit: <CreditCard size={16} color="#8047F8" />,
	debit: <Bank size={16} color="#8047F8" />,
	cash: <Money size={16} color="#8047F8" />
}

export function PaymentsType({ inputId, isSelected, onSelect }: PaymentsTypeProps) {
	return (
		<PaymentTypeContainer>
			{paymentIcons[inputId]}
			<p>{paymentName[inputId]}</p>
			<input
				type="radio"
				id={inputId}
				value={inputId}
				name='tipos_pagamento'
				checked={isSelected}
				onChange={() => onSelect(inputId)}
			/>
		</PaymentTypeContainer >
	)
}