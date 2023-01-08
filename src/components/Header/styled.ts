import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;

        a:first-child {
            background-color: ${props => props.theme["purple-light"]};

            display: flex;
            align-items: center;
            padding: 0.5rem;
            border-radius: 8px;
            margin-right: -0.5rem;

            svg {
                color: ${props => props.theme["purple"]};
                margin: 0 0.2rem;
            }
        }

        a:last-child {
            background-color: ${props => props.theme["yellow-light"]};
            
            padding: 0.4rem;
            border-radius: 8px;

            svg {
                color: ${props => props.theme["yellow-dark"]};
                margin: 0;
            }
        }

      
    }
`