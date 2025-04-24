import styled from "styled-components";

export const ProductContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center; 
    border-radius: 6px 36px 6px 36px;   
    background-color: ${props => props.theme['base-card']};
    padding: 0 1.25rem 1.25rem;

    width: 16rem;

    img {
        width: 7.5rem;
        margin-top: -1.5rem;   
    }
`

export const CoffeeType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.5rem;
    margin: 0.75rem 0 1rem;
    
    border-radius: 50px;
    background-color: ${props => props.theme['yellow-300']};
    color: ${props => props.theme['yellow-700']};

   width: fit-content;

    p {
        font: ${props => props.theme['Roboto-Tag']};
    }
`

export const CoffeeInfo = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    margin-bottom: 2rem;
    text-align: center;

    h3 {
        font: ${props => props.theme['Baloo-Title-S']};
        color: ${props => props.theme['base-subtitle']};
    }

    p {
        font: ${props => props.theme['Roboto-Text-S']};
        color: ${props => props.theme['base-label']};
    }
`

export const ProductPurchase = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 1.5rem;
`

export const ProductValue = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.25rem;

    span {
        font: ${props => props.theme['Roboto-Text-S']};
        color: ${props => props.theme['base-text']};
    }

    h3 {
        font: ${props => props.theme['Baloo-Title-S']};
        color: ${props => props.theme['base-text']};
    }
`

export const PurchaseControl = styled.form`
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 0.5rem;

    input {
        width: 4.5rem;
        height: 2.375rem;
        border-radius: 8px;
        font: ${props => props.theme['Roboto-Text-Regular-M']};
        color: ${props => props.theme['base-title']};
        
        background-color: ${props => props.theme['base-button']};
        border: none;
        padding: 0.55rem;

        &:focus {
            outline: none;
        }
    }
`





export const FlexDiv = styled.div`
	display: flex;
	gap: 0.25rem;
`