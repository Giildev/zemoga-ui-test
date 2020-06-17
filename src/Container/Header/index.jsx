// Dependencies
import React, { Component } from "react";

// Components

// Styles
import {
  HeaderStyle,
  Title,
  MenuContainer,
  MenuItem,
  SearchIcon,
} from "./styles";

export default class Header extends Component {
  render() {
    return (
      <HeaderStyle>
        <Title>Rule of Thumb.</Title>
        <MenuContainer>
          <MenuItem>Past Trials</MenuItem>
          <MenuItem>How It Works</MenuItem>
          <MenuItem>Login/Sign Up</MenuItem>
          <SearchIcon></SearchIcon>
        </MenuContainer>
      </HeaderStyle>
    );
  }
}
