import React, { Component } from "react";
import styled from "styled-components";

const StyledRowDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;

  height: 40px;
  background-color: grey;
`;
const StyledUsernameDiv = styled.div`
  height: 40px;
  width: 100%;
  background-color: red;
`;
const StyledPredictDiv = styled.div`
  height: 40px;
  width: 100%;
  background-color: yellow;
`;
const StyledPointsDiv = styled.div`
  height: 40px;
  width: 100%;
  background-color: green;
`;

class Rows extends Component {
  render() {
    const { user } = this.props;
    if (user.predictions === undefined) {
      console.log("Loading ROWS...!");
      return <h1> Problem retrieving user data </h1>;
    } else {
      return (
        <StyledRowDiv>
          <StyledUsernameDiv> {user.username} </StyledUsernameDiv>
          <StyledPredictDiv> {user.predictions}</StyledPredictDiv>
          <StyledPointsDiv> {user.points}</StyledPointsDiv>
        </StyledRowDiv>
      );
    }
  }
}

export default Rows;
