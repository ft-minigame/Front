import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'UhBeemysen';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeemysen.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'UhBeemysen', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
`;

export default GlobalStyle;
