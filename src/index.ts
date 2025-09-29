import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: '#E66767',
    secondary: '#FFEBD9',
    tertiary: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none
    }

    body {
        background-color: ${colors.tertiary};
        padding-top: 40px;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`