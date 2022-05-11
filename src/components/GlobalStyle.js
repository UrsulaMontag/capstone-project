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
  }
  
`;

export default GlobalStyle;
