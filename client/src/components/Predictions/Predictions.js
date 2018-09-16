import React, { Component } from "react";
import Button from "../Button/Button.js";
import {
  StyledPredictionsDiv,
  PredictionsTable,
  CellHeader,
  CellPoints
} from "./Predictions.style";
import edit from "../../assets/images/edit.png";
import dropDown from "../../assets/images/dropDown.svg";
// import Heyboy from "../../assets/profilePhotos/Heyboy.jpeg";
// import mrrfvfd from "../../assets/profilePhotos/mrrfvfd.jpeg";
// import solGirl from "../../assets/profilePhotos/Solgirl.jpg";
import bennyboy from "../../assets/profilePhotos/bennyboy.jpeg";

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
                src={bennyboy}
                height="50px"
                alt={`${users[i - 1].username}'s profile pic`}
              />
            </td>
          );
        } else if (j === 1) {
          children.push(<td>{`${users[i - 1].username}`}</td>);
        } else {
          let prediction = JSON.parse(users[i - 1].predictions)[j - 2];
          if (prediction === undefined) {
            prediction = [0, 0];
          }
          children.push(<td>{`${prediction[0]} - ${prediction[1]}`}</td>);
        }
      }
      table.push(<tr>{children}</tr>);
    }
    return table;
  };
  render() {
    const { matches } = this.props;
    if (matches.length < 15) {
      return <h1> Loading..!</h1>;
    } else {
      return (
        <StyledPredictionsDiv>
          <Button img={edit} text="Edit Predictions" />
          <Button img={dropDown} text="Sort" />
          <PredictionsTable>
            <tbody>{this.createTable()}</tbody>
          </PredictionsTable>
        </StyledPredictionsDiv>
      );
    }
  }
}

export default Predictions;
