import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-pink: #ef476f;
        --color-sunglow: #ffd166;
        --color-emerald: #06d6a0;
        --color-blue: #118ab2;
        --color-midnight-green: #073b4c;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing : border-box;
    }
    html {
        font-size: 62.5%;
    }
    body{
        font-family: 'New Tegomin', serif;
    }
`;

export default GlobalStyles;
