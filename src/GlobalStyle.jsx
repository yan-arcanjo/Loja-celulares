import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Helvetica, Sans-serif;
        box-sizing: border-box;
    }
    body {
        width: 100vw;
        height: 100vh;
    }
`