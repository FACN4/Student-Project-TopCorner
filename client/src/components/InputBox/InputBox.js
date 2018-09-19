import React, { Component } from "react";
import { StyledInputBox } from "./InputBox.style.js";
class InputBox extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.titleProp}:</h2>
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
