import React, { Component } from "react";
import {
  HeaderDiv,
  HeaderImg,
  Div,
  Profileimg,
  TopCorner,
  Links,
  Button,
  Dropdown,
  DropdownElement
} from "../Header1/Header1.style.js";
import football from "../../assets/images/football.png";
import photo from "../../assets/profilePhotos/HELLOMATE.jpg";

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />
        <TopCorner>Top Corner</TopCorner>

        <Profileimg src={photo} onClick={this.props.dropDownView} />
        {this.props.dropDown && (
          <Dropdown>
            <DropdownElement>
              <Links to="/profile" width="165px;">
                <Button>Profile</Button>
              </Links>
            </DropdownElement>
            <DropdownElement>
              <Links to="/login">
                <Button onClick={this.props.handleLogout}>Log Out</Button>
              </Links>
            </DropdownElement>
          </Dropdown>
        )}
      </HeaderDiv>
    );
  }
}

export default Header;
