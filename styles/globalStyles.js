import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: none;
        font-family: 'Roboto', -apple-system, system-ui, sans-serif;
    }
    body {
        background-color: #FFF;
    }
    html {
        min-height: 100%;
        background: #202022;
    }
    li {
        list-style: none;
        padding-left: 0;
    }
    .nav-link{
    font-family: 'Roboto', sans-serif;
    color: #FFF !important;
  }
`;