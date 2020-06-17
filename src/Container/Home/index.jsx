// Dependencies
import React, { Component } from "react";

// Components
import Header from "../Header";
import Main from "../Main";
import Announce from "../Announce";
import HeroeSection from "../HeroeSection";
import Footer from "../Footer";

// Styles
import {
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

export default class Home extends Component {
  render() {
    return (
      <>
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
}
