import React, { Component } from "react";
import styled from "styled-components";
import Row from "./Row";

const StyledPredictionsDiv = styled.div`
  position: fixed;
  top: 75px;
`;
class Predictions extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    if (users.length === 0) {
      return <h1> Loading..!</h1>;
    } else {
      return (
        <StyledPredictionsDiv>
          {users.map((user, i) => {
            return <Row key={i} user={user} />;
          })}
        </StyledPredictionsDiv>
      );
    }
  }
}

export default Predictions;
