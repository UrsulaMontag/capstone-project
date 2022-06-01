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
      font-size: 1.6rem;
      position: relative;
  }
  :root {
    --main-bg-color: #6D76A6;
    --main-bg-color-full: #a67272;
    --bg-color-light: #A4BF88;
    --text-color-light: #ecf3f9;
    --text-color-dark: #1d3041;
    --headline-little: #54592D;
    --button-bg-color: #B6D96A;
    --button-bg-color--hover: #B6D96A80;
    --color-dark: #54592D;
    --shadow: #1d304160;
    --color-warning-red: #EB589C;
      }
  
`;

export default GlobalStyle;
