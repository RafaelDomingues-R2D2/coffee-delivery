import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0.5rem 1.5rem;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme["background"]};
        color: ${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }
`