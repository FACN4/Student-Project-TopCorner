import React, { Component } from "react";
import styled from "styled-components";

const StyledFooterDiv = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 35px;
  background-color: black;
`;
const StyledFooterP = styled.div`
  color: white;
  position: relative;
  margins: auto;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooterDiv>
        <StyledFooterP> 'Contact: topcorner@gmail.com' </StyledFooterP>
      </StyledFooterDiv>
    );
  }
}

export default Footer;
