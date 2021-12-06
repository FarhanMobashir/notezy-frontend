import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing:border-box;
    }
    body {
        margin:0;
        font-family: 'Rubik',sans-serif;
    }
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
`;
