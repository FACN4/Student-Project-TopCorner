import React, { Component } from "react";
import { StyledInputBox } from "./InputBox.style.js";
class InputBox extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.name}:</p>
        <StyledInputBox
          type={this.props.type}
          value=""
          placeholder={this.props.name}
        />
      </React.Fragment>
    );
  }
}

export default InputBox;
