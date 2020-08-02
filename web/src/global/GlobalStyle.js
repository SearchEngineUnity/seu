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
    overflow: inherit;
  }

  html {
    font-size: 14px;
  }

  .form-control:focus, .form-control:active, .form-control:hover {
    box-shadow: none;
    -webkit-box-shadow: none;
    border: #0a7b86 solid 1px;
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
