import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: none;
        border: 2px solid ${(props) => props.theme['base-title']};
    }

    body {
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    input {
        background-color: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};

      
    }

    h1 {
        color: ${(props) => props.theme['base-title']};
        font: ${(props) => props.theme['Baloo-Title-XL']};
    }

    h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font: ${(props) => props.theme['Baloo-Title-L']};
    }

`   