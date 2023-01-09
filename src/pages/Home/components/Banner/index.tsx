import { BannerBox, BannerContainer, BannerList, BannerListItemsLeft, BannerListItemsRight } from "./styles"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

import image from "../../../../assets/imageforbanner.png"

export function Banner(){
    return (
        <BannerContainer>
            <BannerBox>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <BannerList>
                    <BannerListItemsLeft>
                        <p><span><ShoppingCart size={17} weight="fill" /></span> Compra simples e segura</p>
                        <p><span><Timer size={17} weight="fill" /></span> Entrega rápida e rastreada</p>
                    </BannerListItemsLeft>
                    <BannerListItemsRight>
                        <p><span><Package size={17} weight="fill" /></span> Embalagem mantém o café intacto</p>
                        <p><span><Coffee size={17} weight="fill" /></span> O café chega fresquinho até você</p>
                    </BannerListItemsRight>
                </BannerList>
            </BannerBox>
            <img src={image} alt="" />
        </BannerContainer>
    )
}