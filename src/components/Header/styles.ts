import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.75rem;
    }    

	a {
		border: 0;
	}
`

export const Address = styled.div`
    padding: 0.5rem;
    height: 2.375rem;

    background-color: ${props => props.theme['purple-300']};
    color: ${props => props.theme['purple-700']};
    border-radius: 6px;

    display: flex;
    gap: 0.25rem;
    align-items: center;

    span{
        font: ${props => props.theme['Roboto-Text-S']};
    }
`

export const CartCounter = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;

    background-color: ${props => props.theme['yellow-700']};
    color: ${props => props.theme['white']};
    bottom: 1.65rem;
    left: 1.65rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font: ${props => props.theme['Roboto-Text-S']}
`