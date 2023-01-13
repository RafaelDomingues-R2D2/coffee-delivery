import styled from "styled-components"

export const BannerContainer = styled.div`
    display: grid;
    grid-template-columns: 680px 1fr;
    
    @media(max-width: 768px){
        grid-template-columns: 1fr;
    }
`

export const BannerBox = styled.div`
    h1 {
        font-family: "Baloo 2", sans-serif;
        font-size: 300%;
        color: ${props => props.theme["base-title"]};
    }

    p {
        font-size: 160%;
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const BannerList = styled.div`
    display: flex;
    margin-top: 3rem;
    margin-left: -3rem;

    @media(max-width: 768px){
        margin-left: -0.3rem;
    }
`

export const BaseListItems = styled.div`
     p {
        display: flex;
        align-items: center;
        width: 100%;

        font-size: 130%;
    }

    span {
        color: ${props => props.theme["background"]};

        display: flex;
        padding: 0.5rem;
        border-radius: 24px;
        margin-right: 0.6rem;
    }

    svg {
        margin: 0;
    }
`

export const BannerListItemsLeft = styled(BaseListItems)`
    margin-right: -3rem;

    p:first-child  span {
        background-color: ${props => props.theme["yellow-dark"]};
    }

    p:last-child span {
        background-color: ${props => props.theme["yellow"]};
    }
`

export const BannerListItemsRight = styled(BaseListItems)`
   p:first-child span {
        background-color: ${props => props.theme["base-text"]};
   }

   p:last-child span {
        background-color: ${props => props.theme["purple"]};
   }
`