import React, { Component } from "react";
import styled from "styled-components";

class InputBox extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <StyledFooterDiv>
        <StyledFooterP> 'Contact: topcorner@gmail.com' </StyledFooterP>
      </StyledFooterDiv>
    );
  }
}

export default InputBox;
