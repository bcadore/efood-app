import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#E66767",
  secondary: "#FFEBD9",
  tertiary: "#FFF8F2",
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${colors.tertiary};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0px auto;
    }
`;
