import React, { Component } from "react";
import { StyledInputBox } from "./InputBox.style.js";
class InputBox extends Component {
  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <p>{this.props.titleProp}:</p>
=======
        <p>{this.props.name}:</p>
>>>>>>> master
        <StyledInputBox
          name={this.props.nameProp}
          type={this.props.typeProp}
          onChange={this.props.onChangeProp}
          pattern={this.props.patternProp}
        />
<<<<<<< HEAD
=======

>>>>>>> master
      </React.Fragment>
    );
  }
}

export default InputBox;
