import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    line-height: 1;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle;