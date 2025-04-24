import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CheckoutCart = styled.div`
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const CheckoutCartButton = styled(CheckoutCart).attrs({ as: 'button' })`
    border: 0;
    background-color: ${props => props.theme['purple-700']};
    cursor: pointer;
    transition: 0.2s;

    &:hover{
        background-color: ${props => props.theme['purple-500']};
    }
`

export const CheckoutCartNavLink = styled(CheckoutCart).attrs({ as: NavLink })`
     background-color: ${props => props.theme['yellow-300']};
`;