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
    --main-bg-color: #283301;
    --bg-color-light:  #edf3e1;
    --color-light: #F2BB13;
    --text-color-dark: #1d3041;
    --headline-little:  #283301;
    --button-bg-color: #F2BB13;
    --detail-color: #7AA61B;
    --color-dark: #283301;
    --shadow: #1d304160;
    --color-warning-red: #8C4E03;
      }
  
`;

export default GlobalStyle;
