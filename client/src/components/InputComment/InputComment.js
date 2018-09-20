import React, { Component } from "react";
import { StyledInputComment } from "./InputComment.style.js";

class InputComment extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledInputComment
          name={this.props.nameProp}
          type={this.props.typeProp}
          onChange={this.props.onChangeProp}
          pattern={this.props.patternProp}
        />
      </React.Fragment>
    );
  }
}

export default InputComment;
