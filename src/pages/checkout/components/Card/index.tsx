import { Box, Button, Content, Header, Main } from "./styles";
import coffee from "../../../../assets/expressoTradicional.png"
import { Trash } from "phosphor-react";


export function Card(){
    return (
        <Content>
            <img src={coffee} alt="" />
            <Box>
                <Header>
                    <p>Expresso Tradicional</p>
                    <span>R$</span><label>9,99</label>
                </Header>
                <Main>
                    <Button>                
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </Button>
                    <button><Trash size={19}/>REMOVER</button>
                </Main>
            </Box>
        </Content>
    )
}