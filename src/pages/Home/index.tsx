import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { HomeContent, HomeList } from "./styles";

export function Home(){
    return (
        <HomeContent>
            <Banner />
                <h2>Nossos cafés</h2>
            <HomeList>
                <Card />
            </HomeList>
        </HomeContent>
    )
}