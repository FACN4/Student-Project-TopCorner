import React, { Component } from "react";
// import styled from "styled-components";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from "./Header";
import Predictions from "./Predictions";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      teams: [],
      matches: []
    };
  }
  componentDidMount() {
    Promise.all([
      fetch("/api/users"),
      fetch("/api/matches"),
      fetch("/api/teams")
    ])
      .then(res => Promise.all(res.map(dataset => dataset.json())))
      .then(data => {
        this.setState({ users: data[0], matches: data[1], teams: data[2] });
        console.log(this.state.matches);
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.teams.length !== 32) {
      return <h1> Loading..!</h1>;
    } else {
      return (
        <div>
          <Header />
          <Predictions users={this.state.users} matches={this.state.matches} />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
