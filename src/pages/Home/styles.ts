import styled from "styled-components";

export const HomeContent = styled.main`
    margin: 5rem -2rem;

    h2 {
        margin: 4rem 4.5rem;
        font-size: 220%;

        font-family: "Baloo 2";
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const HomeList = styled.div`
    margin: 3rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media(max-width: 750px){
        grid-template-columns: 1fr 1fr;
    }
`