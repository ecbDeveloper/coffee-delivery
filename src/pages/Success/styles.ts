import styled from "styled-components";

export const SuccessMessage = styled.div`
	margin: 5rem 0 2.5rem;	
	
	h1 {
		font: ${props => props.theme['Baloo-Title-L']};
		color: ${props => props.theme['yellow-700']};
	}

	p {
		font: ${props => props.theme['Roboto-Text-Regular-L']};
		color: ${props => props.theme['base-subtitle']};
	}
`

export const MainOrderInfos = styled.div`
	border: 1px solid transparent;
	border-radius: 6px 36px 6px 36px;
	
	background: linear-gradient(to left, #DBAC2C, #8047F8);
	background-origin: border-box;
	background-clip: padding-box, border-box;
	background-image: 
		linear-gradient(#FAFAFA, #FAFAFA),
		linear-gradient(to left, #8047F8, #DBAC2C);

	padding: 2.5rem;	

	display: flex;
	flex-direction: column;
	gap: 2rem;

`

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 6rem;
	align-items:end;
`

export const Wrapper = styled.div`
	display: flex;
	gap: 0.75rem;	
	align-items: end;

	p {
		font: ${props => props.theme['Roboto-Text-Regular-M']}
	}
`

export const BoldFont = styled.p`
	font-weight: 900 !important; 
`

export const DeliveryLocation = styled.div`
	display: flex;
	gap: 0.25rem;
`