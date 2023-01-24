import styled from "styled-components";

export const Content = styled.div`
    background-color: ${props => props.theme["base-card"]};
    /* background-color: ${props => props.theme["purple-light"]}; */

    display: flex;

    border-bottom: solid 1px ${props => props.theme["base-button"]};
    padding-bottom: 1rem;
    margin-bottom: 1.3rem;

    img {
        height: 16%;
        width: 16%;

        margin-right: -3rem;
        margin-left: 0.5rem;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    display: flex;
    align-items: center;

    margin-top: -0.2rem;

    font-size: 120%;

    p {
        font-size: 105%;
        color: ${props => props.theme["base-subtitle"]};
    }

    span {
        margin-right: 0.3rem;

        font-size: 120%;
        font-weight: bold;
    }

    label {
        margin: 0;
        margin-right: -2rem;

        font-size: 120%;
        font-weight: bold;
    }
`

export const Main = styled.main`
    display: flex;

    align-items: center;

    margin: -1rem 3rem;

    > button {
        background-color: ${props => props.theme["base-button"]};
        display: flex;

        align-items: center;
        justify-content: flex-end;

        height: 2rem;
        width: 5.68rem;

        border: none;
        border-radius: 6px;

        font-size: 80%;

        svg {
            margin-left: -1rem;
            margin-right: 0.5rem;

            color: ${props => props.theme["purple"]};
        }
    }
`

export const Button = styled.div`
    background-color: ${props => props.theme["base-button"]};

    display: flex;
    justify-content: center;
    align-items: center;

    height: 2rem;
    width: 5rem;

    margin: 0;

    height: 2rem;
    width: 5rem;

    border-radius: 6px;

    button {
        background-color: ${props => props.theme["base-button"]};
        color: ${props => props.theme["purple"]};

        display: flex;
        align-items: center;

        margin: 0;

        border: ${props => props.theme["base-button"]};
        border-radius: 8px;

        font-size: 150%;
    }

    span {
        margin: 0.5rem;
        font-size: 150%;
    }
`