import React, { Component } from "react";
import { StyledInputBox } from "./InputBox.style.js";
class InputBox extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.name}:</p>
        <StyledInputBox
          name={this.props.nameProp}
          type={this.props.typeProp}
          onChange={this.props.onChangeProp}
        />

      </React.Fragment>
    );
  }
}

export default InputBox;
