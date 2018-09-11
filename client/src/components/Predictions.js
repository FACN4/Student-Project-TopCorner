import React, { Component } from "react";
import styled from "styled-components";

const StyledPredictionsDiv = styled.div`
  position: fixed;
  top: 75px;
`;
class Predictions extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { users } = this.props;

    const user1 = users[0];
    console.log(user1);

    return (
      <StyledPredictionsDiv>
        <p> Helllo </p>
      </StyledPredictionsDiv>
    );
  }
}

export default Predictions;
