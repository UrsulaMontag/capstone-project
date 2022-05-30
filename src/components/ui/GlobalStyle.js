import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    color: none;
    opacity: 1;
    box-sizing: border-box; 
}

  html {
    font-size: 62.5%;
    font-family: Roboto, sans-serif;
  }

  body {
      font-size: 1.6rem
    }

  :root {
    --main-bg-color: #a6727260;
    --main-bg-color-full: #a67272;
    --text-color-light: #ecf3f9;
    --text-color-dark: #1d3041;
    --headline-little: #adbf2b;
    --button-bg-color: #adbf2b;
    --button-bg-color--hover: #adbf2b80;
    --color-dark: #1d3041;
    --shadow: #1d304160;
    --color-warning-red: #EB589C;
      }
  
`;

export default GlobalStyle;
