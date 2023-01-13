import expressoTradicional from "../../../../assets/expressoTradicional.png"
import { CardBox, CardContent, CardFooter, CardListButton } from "./styles"

import { ShoppingCartSimple } from "phosphor-react"

export function Card(){
    return (
        <CardContent>
            <img src={expressoTradicional} alt="" />
            <CardBox>
                <label>TRADICIONAL</label>
                <strong>Expresso Tradicional</strong>
                <p>O tradicional café feito com água quente e grãos moídos</p>
                <CardFooter>
                    <span>R$</span><label>9,99</label>
                    <CardListButton>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </CardListButton>
                    <button><ShoppingCartSimple size={22} weight="fill" /></button>
                </CardFooter>
            </CardBox>
            
        </CardContent>
    )
}