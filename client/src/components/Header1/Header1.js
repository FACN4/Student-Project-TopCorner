import React, { Component } from "react";
import { HeaderDiv, HeaderImg,Div,Profileimg } from "../Header1/Header1.style.js";
import football from "../../assets/images/football.png";
import { Link } from "react-router-dom";
import photo from "../../assets/profilePhotos/HELLOMATE.jpg";

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />
        <Div>

          <Profileimg src={photo} onclick={this.props.dropDownView}/>
        {this.props.dropDown && <div>
        <Link to="/profile">Profile</Link>
        <button onClick={this.props.handleLogout}>Log Out</button>
      </div>}
      </Div>
      </HeaderDiv>
    );
  }
}

export default Header;
