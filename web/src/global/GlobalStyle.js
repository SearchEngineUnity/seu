import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: rubrik-edge-new,sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  pre {
    font: inherit;
    color: inherit;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    white-space: pre-wrap;
  }
  html {
    font-size: 14px;
  }
  @media screen and (min-width: 576px) {
    html {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 992px) {
    html {
      font-size: 18px;
    }
  }
  h1, h2 {
    font-family: rubrik-edge-new,sans-serif;
    font-weight: 700;
    font-style: normal;
  }
`;
