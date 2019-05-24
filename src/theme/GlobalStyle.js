import { createGlobalStyle } from 'styled-components';
import { theme } from 'theme/mainTheme';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        padding-left: 150px;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
        background-color: ${theme.grey50};
        color: ${theme.black};
    }
`;

export default GlobalStyle;
