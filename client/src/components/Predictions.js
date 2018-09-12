import React, { Component } from "react";
import styled from "styled-components";
import Row from "./Row";

const StyledPredictionsDiv = styled.div`
  position: fixed;
  top: 75px;
`;
class Predictions extends Component {
  createTable = () => {
    let table = [];
    const { users, matches } = this.props;
    console.log(matches);
    // Outer loop to create parent
    for (let i = 0; i < users.length + 1; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < matches.length; j++) {
        if (i === 0 && j === 0) {
          children.push(<td>{``}</td>);
        } else if (i === 0) {
          children.push(<td class="tbl tbl-matches">{`Matches`}</td>);
        } else if (j === 0) {
          children.push(<td>{`${users[i - 1].photo}`}</td>);
        } else if (j === 1) {
          children.push(<td>{`${users[i - 1].username}`}</td>);
        } else {
          children.push(
            <td>{`${JSON.parse(users[i - 1].predictions)[j - 2][0]} - ${
              JSON.parse(users[i - 1].predictions)[j - 2][1]
            }`}</td>
          );
        }
      }
      table.push(<tr>{children}</tr>);
    }
    return table;
  };
  render() {
    const { users } = this.props;
    console.log(users);
    if (users.length === 0) {
      return <h1> Loading..!</h1>;
    } else {
      return (
        <StyledPredictionsDiv>
          <table>{this.createTable()}</table>
        </StyledPredictionsDiv>
      );
    }
  }
}
// {users.map((user, i) => {
//   return <Row key={i} user={user} />;
// })}
// </StyledPredictionsDiv>
// );
// }
// }
// }

export default Predictions;
