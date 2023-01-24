import { Box, Content, Item, List } from "./styles"

import  success  from "../../assets/successBanner.png"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

export function Success(){
    return (
        <Content>
            <Box>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <List>
                    <Item>
                        <p>Entrega em<strong>Rua João Daniel Martinelli, 102</strong></p>
                        <p>Farrapos - Porto Alegre, RS</p>
                    </Item>
                    <br />
                    <Item>
                        <p>Previsão de entrega</p>
                        <strong>20 min - 30 min</strong>
                    </Item>
                    <br />
                    <br />
                    <Item>
                        <p>Pagamento na entrega</p>
                        <strong>Cartão de Crédito</strong>
                    </Item>

                </List>
            </Box>
            <img src={success} alt="" />
        </Content>
    )
}