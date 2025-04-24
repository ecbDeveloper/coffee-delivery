import styled from "styled-components"

export const SelectedProduct = styled.div`
    display: flex;
    gap: 1.25rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};
    padding-bottom: 1.5rem;

    img {
        width: 4rem;
    }

    p {
        font: ${props => props.theme['Roboto-Text-Regular-M']}
    }

    input {
        height: 2rem;
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

export const RemoveProductButton = styled.button`
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

	
    border: 1px solid transparent;
    border-radius: 6px;
    background-color: ${props => props.theme['base-button']};
    font: ${props => props.theme['Roboto-Button-M']};
    color: ${props => props.theme['base-text']};

    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme['base-hover']};
    }
`

export const ProductCount = styled.div`
    display: flex;
    gap: 0.5rem;

    margin-top: 0.5rem;
`

export const PriceContainer = styled.div`
    display: flex;
    gap: 3.125rem;
`