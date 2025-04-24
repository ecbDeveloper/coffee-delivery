import styled from "styled-components";

export const PaymentTypeContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    background-color: ${props => props.theme['base-button']};
    border: 0;
    border-radius: 6px;

    height: 3.125rem;
    width: 11.125rem;
    position: relative;
    transition: 0.1s;

    p {
        font: ${props => props.theme['Roboto-Button-M']}
    }

    input {
        width: 100%;
        height: 100%;
        position: absolute;
        cursor: pointer;

        opacity: 0;
        z-index: 1;
    }

    &:has(input:hover){
        background-color: ${props => props.theme['base-hover']};
    }

    &:has(input:checked){
        background-color: ${props => props.theme['purple-300']};
        border: 1px solid ${props => props.theme['purple-500']};
    }
`