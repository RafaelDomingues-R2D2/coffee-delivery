import styled from "styled-components";

export const CheckoutContent = styled.main`
    display: grid;
    grid-template-columns: 680px 1fr;
    
    margin-top: 4rem;
    margin-left: 0;
`

export const CheckoutOrder = styled.div`
    strong {
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

    title { 
        color: ${props => props.theme["base-subtitle"]};
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

    title {
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

export const PayButtonsList = styled.div`
    display: flex;
`

export const ButtonPayTypes = styled.button`
    background-color: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};

    display: flex;
    align-items: center;

    height: 3.18rem;
    width: 11.16rem;

    margin: 1.5rem 0.5rem;
    padding: 0.6rem;

    border: none;
    border-radius: 6px;

    font-size: 90%;

    svg {
       color: ${props => props.theme["purple"]}; 

       margin: 0.3rem;
       margin-right: 0.8rem;
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

    border-radius: 6px 44px;
`

export const CheckoutResult = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0;
    
    justify-content: center;

    button {
        background-color: ${props => props.theme["yellow"]};
        color: ${props => props.theme["white"]};

        padding: 1rem;

        border: none;
        border-radius: 6px;

    }
`

export const CheckoutSummary = styled.div`
    display: flex;
    margin: 0 -1.5rem;

    strong {
        margin-right: 0.1rem;
        font-size:  100%;
    }

    button {
        justify-content: center;
    }
`

export const CheckoutCartLeft = styled.div`
    display: grid;

    p {
        font-size: 120%;
    }

    strong {
        color: ${props => props.theme["base-subtitle"]};

        margin-right: 0.1rem;
        font-weight: bold;
        font-size:  150%;
    }
`

export const CheckoutCartRight = styled.div`
    display: grid;

    margin-left: 9rem;

    justify-items: flex-end;

    > strong {
        color: ${props => props.theme["base-subtitle"]};

        font-weight: bold;
        font-size: 152%;
    }

    label {
        margin-right: 0.1rem;
        font-size: 100%;
    }
   
    > label {
        font-size: 135%;
    }
`
