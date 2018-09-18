import React, { Component } from "react";
import { HeaderDiv, HeaderImg } from "../Header/Header.style.js";
import football from "../../assets/images/football.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />
        <Link to="/profile">Profile</Link>
        <button onClick={this.props.handleLogout}>Log Out</button>
      </HeaderDiv>
    );
  }
}

export default Header;
