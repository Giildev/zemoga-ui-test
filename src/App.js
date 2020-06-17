import React from "react";
import {
  GlobalStyle,
  Landing,
  ContentSpace,
  AnnouncePosition,
  PreviousTitle,
  NewHeroeSpace,
  NewHeroeBlur,
  NewHeroeText,
  Button,
  ButtonText,
  DottedLine,
} from "./styles";

//Containers
import Header from "./Container/Header";
import Main from "./Container/Main";
import Announce from "./Container/Announce";
import HeroeSection from "./Container/HeroeSection";
import Footer from "./Container/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Landing>
        <Header />
        <Main />
      </Landing>
      <ContentSpace>
        <AnnouncePosition>
          <Announce />
        </AnnouncePosition>
        <PreviousTitle>Previous Ruling</PreviousTitle>
        <HeroeSection />
        <NewHeroeSpace>
          <NewHeroeBlur>
            <NewHeroeText>
              Is there anyone else you would want us to add?
            </NewHeroeText>
            <Button>
              <ButtonText>Submit Name</ButtonText>
            </Button>
          </NewHeroeBlur>
        </NewHeroeSpace>
        <DottedLine />
        <Footer />
      </ContentSpace>
    </>
  );
}

export default App;
