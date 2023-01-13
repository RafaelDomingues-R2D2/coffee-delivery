import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { HomeContent, HomeList } from "./styles";

export function Home(){
    return (
        <HomeContent>
            <Banner />
            <HomeList>
                <h1>Nossos cafés</h1>
                <Card />
            </HomeList>
        </HomeContent>
    )
}