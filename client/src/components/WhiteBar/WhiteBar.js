import React, { Component } from "react";
import { WhiteDiv } from "../WhiteBar/WhiteBar.style.js";
import Button from "../Button/Button.js";
import edit from "../../assets/images/edit.png";
import dropDown from "../../assets/images/dropDown.svg";

class WhiteBar extends Component {
  render() {
    return (
      <WhiteDiv>
        <Button imgProp={edit} textProp="Edit Predictions" />
        <Button imgProp={dropDown} textProp="Sort" />
      </WhiteDiv>
    );
  }
}

export default WhiteBar;
