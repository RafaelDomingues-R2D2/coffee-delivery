import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutCart, CheckoutContent, CheckoutDataDelivery, CheckoutDataDeliveyListInputs, CheckoutDataOfPay, CheckoutOrder, CheckoutSelectedCoffees, Input } from "./styles";

export function Checkout(){
    return (
        <CheckoutContent>
            <CheckoutOrder>
            <strong>Complete seu pedido</strong>

                <CheckoutDataDelivery>
                    <strong><MapPinLine size={23}/>Endereço de Entrega</strong>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                    <CheckoutDataDeliveyListInputs>
                        <Input placeholder="CEP" type="text" inputWidth="short"/>
                        <Input placeholder="Rua" type="text" inputWidth="superLarge"/>
                        <Input placeholder="Número" type="text" inputWidth="short"/>
                        <Input placeholder="Complemento" type="text" inputWidth="large"/>
                        <Input placeholder="Bairro" type="text" inputWidth="short"/>
                        <Input placeholder="Cidade" type="text" inputWidth="medium"/>
                        <Input placeholder="UF" type="text" inputWidth="superShort"/>
                    </CheckoutDataDeliveyListInputs>
                </CheckoutDataDelivery>
                <CheckoutDataOfPay>
                    <strong><CurrencyDollar size={23} />Pagamento</strong>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </CheckoutDataOfPay>
            </CheckoutOrder>
            <CheckoutSelectedCoffees>
                <strong>Cafés selecionados</strong>

                <CheckoutCart>
                    <button>Confirmar pedido</button>
                </CheckoutCart>
            </CheckoutSelectedCoffees>
        </CheckoutContent>
    )
}