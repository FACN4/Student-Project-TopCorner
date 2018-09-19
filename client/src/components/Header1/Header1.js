import React, { Component } from "react";
import {
  HeaderDiv,
  HeaderImg,
  Div,
  Profileimg,
  TopCorner,
  Links
} from "../Header1/Header1.style.js";
import football from "../../assets/images/football.png";
import photo from "../../assets/profilePhotos/HELLOMATE.jpg";

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />
        <TopCorner>Top Corner</TopCorner>

        <Div>
          <Profileimg src={photo} onClick={this.props.dropDownView} />
          {this.props.dropDown && (
            <div>
              <Links to="/profile">Profile</Links>
              <button onClick={this.props.handleLogout}>Log Out</button>
            </div>
          )}
        </Div>
      </HeaderDiv>
    );
  }
}

export default Header;
