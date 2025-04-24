import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const IntroductionContainer = styled.main`
    display: flex;
    gap: 3.5rem;
    margin: 5.875rem 0;
`

export const MainInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`

export const TitleContainer = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        font: ${props => props.theme['Roboto-Text-Regular-L']};
        color: ${props => props.theme['base-subtitle']};
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, auto);
 
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    width: fit-content;
`

export const DifferentiatorContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    width: fit-content;

    p {
        font: ${props => props.theme['Roboto-Text-Regular-M']};
        color: ${props => props.theme['base-text']};
    }
`

interface DifferentiatorIconsProps {
	color: string;
}

export const DifferentiatorIcons = styled.div<DifferentiatorIconsProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0.5rem;
	max-width: 2rem;
	max-height: 2rem;

    background-color: ${props => props.theme[props.color]};
    color: ${props => props.theme['white']};
`

export const CoffeeSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
`

export const CoffeeGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
`