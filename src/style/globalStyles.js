import { createGlobalStyle } from "styled-components";
import { font } from "./variables";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: ${font.family}
    }
`;

export default GlobalStyle;
