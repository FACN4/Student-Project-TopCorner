import React, { Component } from "react";
import { HeaderDiv, HeaderImg,Div,Profileimg,topCorner, Links} from "../Header1/Header1.style.js";
import football from "../../assets/images/football.png";
import photo from "../../assets/profilePhotos/HELLOMATE.jpg";


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <HeaderImg src={football} alt="Logo" />
        <topCorner>Top Corner</topCorner>

        <Div>
          <Profileimg src={photo} onClick={this.props.dropDownView}/>
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
