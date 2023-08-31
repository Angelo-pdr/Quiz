import { createGlobalStyle } from "styled-components"

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    overflow: hidden;
  }

  body{
    max-width: 100vw;
    height: 100%;
  }

  .container{
    max-width: 900px;
    width: 100%;
    max-height: 100vh;
    height: 100%;
    margin: .5rem auto;
  }
`

export default GlobalCss
