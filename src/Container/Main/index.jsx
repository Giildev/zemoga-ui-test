// Dependencies
import React, { Component } from "react";

// Components
import MainCard from "../../Components/MainCard";

// Styles
import {
  MainStyle,
  MainCardPosition,
  ProgressBar,
  Completed,
  DaysLeft,
} from "./styles";

export default class Main extends Component {
  render() {
    return (
      <MainStyle>
        <MainCardPosition>
          <MainCard />
        </MainCardPosition>
        <ProgressBar>
          <Completed>Closing In</Completed>
          <DaysLeft>22 Days</DaysLeft>
        </ProgressBar>
      </MainStyle>
    );
  }
}
