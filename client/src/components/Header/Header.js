import React, { Component } from "react";
import { HeaderDiv, HeaderImg } from "./Header.style.js";
import football from "../../assets/images/football.png";

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />
      </HeaderDiv>
    );
  }
}

export default Header;
