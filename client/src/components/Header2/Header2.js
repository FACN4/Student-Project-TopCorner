import React, { Component } from "react";
import {topCorner , HeaderDiv ,HeaderImg , Links , Div} from "../Header2/Header2.style.js";
import football from "../../assets/images/football.png";
import photo from "../../assets/profilePhotos/HELLOMATE.jpg";



class Header2 extends Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />
        <topCorner>Top Corner</topCorner>
<Div>
  <Links to="/profile">Edit Info</Links>
  <Links to="/predictions">Skip</Links>
</Div>
      </HeaderDiv>
    );
  }
}

export default Header2;
