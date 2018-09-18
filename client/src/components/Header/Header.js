import React, { Component } from "react";
import { HeaderDiv, HeaderImg , Links , Div } from "./Header.style.js";
import football from "../../assets/images/football.png";


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />
<Div>
        <Links to="/">Home</Links>
        <Links to="/login">Log In</Links>
        <Links to="/Signup">Sign Up </Links>
      </Div>
      </HeaderDiv>
    );
  }
}

export default Header;
