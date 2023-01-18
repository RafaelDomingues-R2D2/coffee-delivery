import styled from "styled-components";

export const CheckoutContent = styled.main`
    display: grid;
    grid-template-columns: 680px 1fr;
    
    margin-top: 4rem;
`

export const CheckoutOrder = styled.div`
    > strong {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 149%;
    }
`

export const CheckoutDataDelivery = styled.div`
    background-color: ${props => props.theme["base-card"]};

    height: 23.25rem;
    width: 40rem;

    padding: 1.5rem 0.1rem;

    border-radius: 6px;

    > strong { 
        ${props => props.theme["base-subtitle"]};
        display: flex;
        align-items: center;

        font-size: 140%;

        svg {
            color: ${props => props.theme["yellow-dark"]};

            margin-right: 0.5rem;
        }
    }

    p {
        margin-top: -0.5rem;
        margin-left: 5rem;
        font-size: 120%;
    }
`

export const CheckoutDataDeliveyListInputs = styled.div`
    margin-left: 2.5rem;
    margin-right: 0;
`

const INPUT_WIDTH = {
    superLarge: "560px",
    large: "348px",
    medium: "276px",
    short: "200px",
    superShort: "60px"
} as const 

interface InputWidth {
    inputWidth: keyof typeof INPUT_WIDTH
}

export const Input = styled.input<InputWidth>`
    background-color: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-label"]};

    display: inline-flex;
    width: ${props => INPUT_WIDTH[props.inputWidth]};

    margin: 0.4rem;
    padding: 1rem;
    border: none;
    border-radius: 4px;

    font-size: 120%;
`

export const CheckoutDataOfPay = styled.div`
    background-color: ${props => props.theme["base-card"]};
    height: 12.93rem;
    width: 40rem;

    padding: 1.5rem 0.1rem;

    > strong {
        color: ${props => props.theme["base-subtitle"]};
        display: flex;
        align-items: center;
        font-size: 140%;
    
        svg {
            color: ${props => props.theme["purple"]};

            margin-right: 0.5rem;
        }
    }

    p {
        margin-top: -0.5rem;
        margin-left: 4.9rem;
        font-size: 120%;
    }
`

export const CheckoutSelectedCoffees = styled.div`
    strong {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 149%;

    }
`

export const CheckoutCart = styled.div`
    background-color: ${props => props.theme["base-card"]};
    height: 32.125rem;
    width: 28rem;

    padding: 1.5rem 0.1rem;

    border-radius: 6px;
`

