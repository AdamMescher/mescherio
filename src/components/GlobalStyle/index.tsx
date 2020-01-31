import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    html {
        height: 100vh;
        width: 100%;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.typography.family.sansSerif};
    }
`;

export default GlobalStyle;
