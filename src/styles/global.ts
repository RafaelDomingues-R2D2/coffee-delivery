import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0.5rem 1.5rem;
        box-sizing: border-box;

        @media(max-width: 768px){
            margin: 0.5rem 0.1rem;
        }
    }

    body {
        background: ${props => props.theme["background"]};
        color: ${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, label {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
    }
`