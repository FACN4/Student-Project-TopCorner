import React, { Component } from "react";
import styled from "styled-components";
// import bennyboy from "../assets/profilePhotos/bennyboy.jpeg";

const StyledPredictionsDiv = styled.div`
  position: fixed;
  top: 75px;
`;
const PredictionsTable = styled.table`
  background-color: #ede9e9;
`;

const CellHeader = styled.td`
  height: 75px;
  max-width: 70px;
  background-color: #b0c7f3;
`;

const CellPoints = styled.td`
  background-color: #c3c2c2;
`;

class Predictions extends Component {
  createTable = () => {
    let table = [];
    const { users, matches } = this.props;
    // Outer loop to create parent
    for (let i = 0; i < users.length + 1; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < matches.length + 3; j++) {
        if (i === 0 && j < 2) {
          children.push(<td>{``}</td>);
        } else if (i === 0 && j === matches.length + 2) {
          children.push(<CellHeader>{`Points`}</CellHeader>);
        } else if (j === matches.length + 2) {
          children.push(<CellPoints>{`${users[i - 1].points}`}</CellPoints>);
        } else if (i === 0) {
          children.push(
            <CellHeader>{`${matches[j - 2].name1} vs ${
              matches[j - 2].name2
            }`}</CellHeader>
          );
        } else if (j === 0) {
          children.push(
            <td>
              <img
                src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/20953476_10213991246360476_4887975886932580651_n.jpg?_nc_cat=0&oh=c27cc91f60f5b7d5191eb1909ab506bf&oe=5C343F4E"
                height="50px"
                alt="profile pic"
              />
            </td>
          );
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
    if (users.length === 0) {
      return <h1> Loading..!</h1>;
    } else {
      return (
        <StyledPredictionsDiv>
          <PredictionsTable>
            <tbody>{this.createTable()}</tbody>
          </PredictionsTable>
        </StyledPredictionsDiv>
      );
    }
  }
}

export default Predictions;
