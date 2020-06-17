// Dependencies
import React, { Component } from "react";
import { Link } from "@reach/router";
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
          <MenuItem>
            <Link to="/past-trial">Past Trial</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/how-it-works">How It Works</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/auth">Login/Sign Up</Link>
          </MenuItem>
          <SearchIcon></SearchIcon>
        </MenuContainer>
      </HeaderStyle>
    );
  }
}
