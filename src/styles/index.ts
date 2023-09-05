import { createGlobalStyle } from "styled-components"

export const colors = {
  bg: '#fff',
  white: 'white',
  hover: '#7141D9',
  button: '#5E25D9',
  title: '#0D0D0D',
  primary: '#404040',
  correct: '#2B8C44'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }

  body{
    max-width: 100vw;
    height: 100%;
    background-color: ${colors.bg};
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
