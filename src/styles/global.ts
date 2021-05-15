import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
    }
    // todos os elementos
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // fonts ficam mais nitidas em browsers
    }
`