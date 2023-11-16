import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    padding: 36px 16px 0;

    line-height: 1.2;
    text-size-adjust: 100%;
    font-family: sans-serif, Helvetica;

    max-width: 936px;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.quaternary};
  }
`

export default GlobalStyle
