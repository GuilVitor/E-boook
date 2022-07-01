import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to top,#0F79AF,#1b2530);
    font-family: Arial, Helvetica, sans-serif
  }
`;

export default GlobalStyle;
