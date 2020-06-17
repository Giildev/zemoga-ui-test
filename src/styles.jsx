import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

:root {
  //Color Palette
  --green: #1cbbb450; 
  --yellow: #ffad1d50;
  --gray: #ebebeb;
  --black: #333333;
  --white: #fff;
}

body {
  min-height: 100vh;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
  font-family: "Lato", sans-serif;
  scroll-behavior: smooth;
}

a {
  color: inherit; 
  text-decoration: inherit;
}
`;
