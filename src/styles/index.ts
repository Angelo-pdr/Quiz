import { createGlobalStyle } from "styled-components"

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: white;
    background-color: black;
  }

  body{
    background-color: white;
    color: blackk;
    max-width: 100vw;
    height: 100%;
  }
`

export default GlobalCss
