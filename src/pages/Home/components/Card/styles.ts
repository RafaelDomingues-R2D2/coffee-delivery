import styled from "styled-components";

export const CardContent = styled.div`
    background-color: ${props => props.theme["base-card"]};

    display: flex;
    justify-content: center;
    width: 14.22rem;
    height: 17.22rem;

    border-radius: 6px 36px;

    img {
        position: absolute;
        margin-top: -1.5rem;
    }
`

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;

    > label {
        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};

        padding: 0.4rem;
        border-radius: 16px;

        font-size: 80%;
    }

    strong {
        color: ${props => props.theme["base-title"]};
        margin: 0.2rem 0;
        font-family: "Baloo 2";
    }

    p {
        color: ${props => props.theme["base-label"]};
        margin: 0 0.5rem;
        text-align: center;
    }
`

export const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    align-items: center;

    > span {
        margin: 0;
        margin-bottom: -0.3rem;
    }

    label {
        margin: 0.2rem;
        margin-right: 1rem;

        font-size: 200%;
        font-family: "Baloo 2";
        font-weight: bold;
    }

    > button {
        background-color: ${props => props.theme["purple-dark"]};
        color: ${props => props.theme["base-card"]};
        
        margin: 0;
        margin-left: 0.3rem;
        
        padding: 0.4rem;

        border: none;

        border-radius: 8px;

        svg {
            margin: 0;
        }
    }
`

export const CardListButton = styled.div`
    background-color: ${props => props.theme["base-button"]};

    display: flex;
    margin: 0;

    border-radius: 16px;

    button {
        background-color: ${props => props.theme["base-button"]};
        color: ${props => props.theme["purple"]};

        margin: 0;

        /* border: none; */
        border: ${props => props.theme["base-button"]};
        border-radius: 8px;

        font-size: 150%;
    }

    span {
        margin: 0.5rem;
        font-size: 150%;
    }
`