import { HeaderContainer } from "./styled";

import logo from "../../assets/Logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
    return (
        <HeaderContainer>
            <img src={logo} alt="Copo de café" />
            <nav>
                <a><MapPin size={23} weight="fill" /> Porto Alegre, RS</a>
                <a><ShoppingCart size={23} weight="fill"/></a>
            </nav>
        </HeaderContainer>
    )
}