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
      fetch("/api/users")
        .then(res => res.json())
        .then(users => this.setState({ users }))
        .catch(err => console.log(err)),
      fetch("/api/matches")
        .then(res => res.json())
        .then(matches => this.setState({ matches }))
        .catch(err => console.log(err)),
      fetch("/api/teams")
        .then(res => res.json())
        .then(teams => this.setState({ teams }))
        .catch(err => console.log(err))
    ]);
    console.log(this.state.matches);
  }

  render() {
    if (this.state.users.length === 0) {
      return <h1> Loading..!</h1>;
    } else {
      return (
        <div>
          <Header />
          <Predictions users={this.state.users} matches={this.state.users} />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
