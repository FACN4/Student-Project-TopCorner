import React, { Component } from "react";
import styled from "styled-components";
// import bennyboy from "../assets/profilePhotos/bennyboy.jpeg";

const StyledPredictionsDiv = styled.div`
  position: fixed;
  top: 75px;
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
          children.push(<td class="tbl tbl-header tbl-points">{`Points`}</td>);
        } else if (j === matches.length + 2) {
          children.push(
            <td class="tbl tbl-points">{`${users[i - 1].points}`}</td>
          );
        } else if (i === 0) {
          children.push(
            <td class="tbl tbl-header tbl-matches">{`${
              matches[j - 2].name1
            } vs ${matches[j - 2].name2} `}</td>
          );
        } else if (j === 0) {
          children.push(
            <td class="tbl tbl-photo">
              <img
                src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.0-9/20953476_10213991246360476_4887975886932580651_n.jpg?_nc_cat=0&oh=c27cc91f60f5b7d5191eb1909ab506bf&oe=5C343F4E"
                height="50px"
              />
            </td>
          );
        } else if (j === 1) {
          children.push(
            <td class="tbl tbl-username">{`${users[i - 1].username}`}</td>
          );
        } else {
          children.push(
            <td class="tbl tbl-prediction">{`${
              JSON.parse(users[i - 1].predictions)[j - 2][0]
            } - ${JSON.parse(users[i - 1].predictions)[j - 2][1]}`}</td>
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
          <table>{this.createTable()}</table>
        </StyledPredictionsDiv>
      );
    }
  }
}

export default Predictions;
