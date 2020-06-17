// Dependencies
import React, { Component } from "react";

// Components

// Styles
import { FooterStyle, Left, Text, Right } from "./styles";

export default class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <Left>
          <Text>Terms and Condition</Text>
          <Text>Privacy Policy</Text>
          <Text>Contact Us</Text>
        </Left>
        <Right>
          <Text>Follow Us</Text>
        </Right>
      </FooterStyle>
    );
  }
}
