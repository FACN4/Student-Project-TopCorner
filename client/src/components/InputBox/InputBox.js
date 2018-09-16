import React, { Component } from "react";
import { StyledInputBox } from "./InputBox.style.js";
class InputBox extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.titleProp}:</p>
        <StyledInputBox
          name={this.props.nameProp}
          type={this.props.typeProp}
          onChange={this.props.onChangeProp}
          pattern={this.props.patternProp}
        />
      </React.Fragment>
    );
  }
}

export default InputBox;
