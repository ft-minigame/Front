import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        // box-sizing: border-box;
    }
    body {
        // display: flex;
        // justify-content: center;
        // text-align: center;
        // margin: 0;
        // padding: 0;
        // font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;

export default GlobalStyle;