import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 2rem;

    h3 {
        font: ${props => props.theme['Baloo-Title-XS']};
        color: ${props => props.theme['base-subtitle']};
    }
`

export const InfosToCompleteOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40rem;

    padding: 2.5rem;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
`

export const AddresForm = styled.div`
    display: grid;
    grid-template-areas:
        'cep . .'
        'street street street'
        'number complemento complemento'
        'neighborhood city state';
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;
`

export const BoxHeader = styled.header`
    display: flex;
    gap: 0.5rem;
`

export const CheckoutFormTitle = styled.p`
    font: ${props => props.theme['Roboto-Text-Regular-M']};
    color: ${props => props.theme['base-subtitle']};
`

export const CheckoutFormSubTitle = styled.p`
    font: ${props => props.theme['Roboto-Text-S']};
    color: ${props => props.theme['base-text']};
`

export const PaymentsContainer = styled.div`
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40rem;

    padding: 2.5rem;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
`

export const PaymentsForm = styled.div`
    display: flex;
    gap: 0.75rem;
`

export const SelectedProductsContainer = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h3 {
        font: ${props => props.theme['Baloo-Title-XS']};
        color: ${props => props.theme['base-subtitle']};
    }
`

export const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem;
    width: 28rem;

    border-radius: 6px 44px 6px 44px;
    background-color: ${props => props.theme['base-card']};

    > button {
        height: 2.875rem;
        border-radius: 6px;
        border: 0;
        cursor: pointer;

        color: ${props => props.theme['white']};
        background-color: ${props => props.theme['yellow-500']};
        transition: 0.1s;

        &:hover {
            background-color: ${props => props.theme['yellow-700']};
        }

		&:disabled {
			background-color: ${props => props.theme['yellow-500']};
			opacity: 0.5;
			cursor: not-allowed;
		}
    }
`

export const OrderPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        font: ${props => props.theme['Roboto-Text-S']};
        color: ${props => props.theme['base-text']};
    }

    h3 {
        font: ${props => props.theme['Roboto-Text-L']};
        color: ${props => props.theme['base-subtitle']};
    }

`


export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border-radius: 4px;
    border: 2px solid ${props => props.theme['base-button']};

    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-title']};
    font: ${props => props.theme['Roboto-Text-S']};
`

export const Select = styled.select`
    width: 100%;
    padding: 0.75rem;
    border-radius: 4px;
    border: 2px solid ${props => props.theme['base-button']};

    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-title']};
    font: ${props => props.theme['Roboto-Text-S']};
	`
