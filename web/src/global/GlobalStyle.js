import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0 auto;
  }
  pre {
    font: inherit;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
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
`;
