import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Card } from "./components/Card";
import { ButtonPayTypes, CheckoutCart, CheckoutCartLeft, CheckoutCartRight, CheckoutContent, CheckoutDataDelivery,
         CheckoutDataDeliveyListInputs, CheckoutDataOfPay, CheckoutOrder, CheckoutResult, 
         CheckoutSelectedCoffees, CheckoutSummary, Input, PayButtonsList } from "./styles";

export function Checkout(){
    return (
        <CheckoutContent>
            <CheckoutOrder>
            <strong>Complete seu pedido</strong>

                <CheckoutDataDelivery>
                    <title><MapPinLine size={23} />Endereço de Entrega</title>
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
                    <title><CurrencyDollar size={23} />Pagamento</title>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    <PayButtonsList>
                        <ButtonPayTypes><CreditCard size={19} />CARTÃO DE CRÉDITO</ButtonPayTypes>
                        <ButtonPayTypes><Bank size={19} />CARTÃO DE DÉBITO</ButtonPayTypes>
                        <ButtonPayTypes><Money size={19} />DINHEIRO</ButtonPayTypes>
                    </PayButtonsList>
                </CheckoutDataOfPay>
            </CheckoutOrder>
            <CheckoutSelectedCoffees>
                <strong>Cafés selecionados</strong>

                <CheckoutCart>
                    <Card />
                    <Card />
                    <CheckoutResult>
                        <CheckoutSummary>
                            <CheckoutCartLeft>
                                <p>Total de itens</p>
                                <p>Entrega</p>
                                <strong>Total</strong>
                            </CheckoutCartLeft>
                            <CheckoutCartRight>
                                <label><label>R$ </label>29,70</label>
                                <label><label>R$ </label>3,50</label>
                                <strong><strong>R$ </strong>3,50</strong>
                            </CheckoutCartRight>
                        </CheckoutSummary>
                        <button>CONFIRMAR PEDIDO</button>
                    </CheckoutResult>
                </CheckoutCart>
            </CheckoutSelectedCoffees>
        </CheckoutContent>
    )
}