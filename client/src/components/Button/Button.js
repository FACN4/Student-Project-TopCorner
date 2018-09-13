import React, { Component } from "react";
import { ButtonGen, BtnImg } from "./Button.style.js";

class Button extends Component {
  render() {
    return (
      <ButtonGen>
        <BtnImg src={this.props.img} />
        {` ${this.props.text}`}
      </ButtonGen>
    );
  }
}

export default Button;
