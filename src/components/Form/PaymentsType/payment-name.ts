import { PaymentsTypeProps } from ".";

export const paymentName: Record<PaymentsTypeProps['inputId'], string> = {
	credit: "Cartão de crédito",
	debit: "Cartão de débito",
	cash: "Dinheiro",
}