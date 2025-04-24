import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 90rem;
    min-height: 100vh;
    padding: 0 10rem 5rem;
    background-color: ${(props) => props.theme['base-background']};
    margin: 0 auto;
`