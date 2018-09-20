import React, { Component } from "react";
import {
  HeaderDiv,
  HeaderImg,
  Links,
  Div,
  TopCorner,
  Div1,
  NavP
} from "./Header.style.js";
import football from "../../assets/images/football.png";

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />

        <Div>
          <Links to="/">
            <Div1>
              <NavP>Home</NavP>
            </Div1>
          </Links>
          <Links to="/login">
            <Div1>
              <NavP>Log In</NavP>
            </Div1>
          </Links>
          <Links to="/Signup">
            <Div1>
              <NavP>Sign Up</NavP>
            </Div1>
          </Links>
        </Div>
      </HeaderDiv>
    );
  }
}

export default Header;
