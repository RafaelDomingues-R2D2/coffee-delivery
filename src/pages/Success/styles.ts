import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: 680px 1fr;

    margin: 5rem 0;

    img {
        margin-top: 10rem;
    }
`

export const Box = styled.div`
    h1 {
        color: ${props => props.theme["yellow-dark"]};

        font-family: "Baloo 2";
        font-size: 205%;
    }

    > p {
        color: ${props => props.theme["base-subtitle"]};

        font-size: 150%;
    }
`

export const List = styled.div`
    margin-top: 5rem;

    padding: 2rem;

    border: solid;
    border-color: ${props => props.theme["yellow"]} ${props => props.theme["purple"]};
    border-radius: 6px 36px;

`

export const Item = styled.div`
    svg {
        background-color: ${props => props.theme["purple"]};
        padding: 1rem;
    }
`