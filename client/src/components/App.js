import React, { Component } from "react";
// import styled from "styled-components";
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom'
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
        console.log(data, "DATA");
        this.setState({ users: data[0], matches: data[1], teams: data[2] });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.users.length === 0) {
      return <h1> Loading..!</h1>;
    } else {
      return (
        <Router>
        <div>
          {/* <Nav> */}
            {/* <Switch> */}
        {/* <Route exact path="/homepage" component={Hompage} />
        <Route path="/login" component={Login} /> */}
        {/* <Route path ="/Predictions" component={Predictions} /> */}
      {/* </Switch> */}
      <Header />
      <Link to="/Predictions">Predictions</Link>
      <Predictions users={this.state.users} matches={this.state.users} />
    {/* </Nav> */}
    <Footer />
        </div>
      </Router>
      );
    }
  }
}

export default App;
