// Dependencies
import React, { Component } from "react";

// Components

// Styles
import {
  AnnounceStyle,
  Title,
  TitleBold,
  TitlePosition,
  AnnounceContent,
} from "./styles";

export default class Announce extends Component {
  render() {
    return (
      <AnnounceStyle>
        <TitlePosition>
          <Title>Speak out. Be heard. </Title>
          <TitleBold>Be counted</TitleBold>
        </TitlePosition>
        <AnnounceContent>
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </AnnounceContent>
      </AnnounceStyle>
    );
  }
}
