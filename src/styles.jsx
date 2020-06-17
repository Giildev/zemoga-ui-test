import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Landing = styled.div`
  box-shadow: inset 0 0 20rem -1rem black;
  background-image: url("pope.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
`;
export const ContentSpace = styled.div`
  padding: 0 12rem;
  @media (max-width: 1024px) {
    padding: 0 6rem;
  }
`;
export const AnnouncePosition = styled.div`
  margin: 4rem 0;
`;
export const PreviousTitle = styled.div`
  font-size: 4rem;
  margin: 4rem 0;
`;

export const NewHeroeSpace = styled.div`
  width: 100%;
  height: 10rem;
  background-image: url("people.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  margin: 2rem 0;
`;

export const NewHeroeBlur = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1rem);
  background-color: #ffffff90;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  @media (max-width: 425px) {
    padding: 1rem;
  }
`;
export const NewHeroeText = styled.div`
  font-size: 3rem;
  font-weight: 100;
  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }
  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`;
export const Button = styled.div`
  display: flex;
  width: 20rem;
  height: 5rem;
  border: solid 0.4rem var(--black);
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
export const ButtonText = styled.div`
  font-size: 2.4rem;
  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;

export const DottedLine = styled.div`
  width: 100%;
  height: 0.1rem;
  border-top: dotted 0.2rem var(--black);
  margin: 4rem 0;
`;
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
