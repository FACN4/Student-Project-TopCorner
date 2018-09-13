import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header.js";
import Table from "../Table/Table.js";
import Footer from "../Footer/Footer.js";
import PredictionsPage from "../../pages/PredictionsPage/PredictionsPage";
import HomePage from "../../pages/HomePage/HomePage.js";
import LoginPage from "../../pages/LoginPage/LoginPage.js";
import SignupPage from "../../pages/SignupPage/SignupPage.js";
import ProfilePage from "../../pages/ProfilePage/ProfilePage.js";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.js";
import PasswordRecoveryPage from "../../pages/PasswordRecoveryPage/PasswordRecoveryPage.js";
import LoadingDiv from "./App.style.js";
const Loading = require("react-loading-animation");

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      teams: [],
      matches: [],
      loginPage: { username: 0, password: "" },
      SignupPage: { username: "", email: "", password: "", confirm: "" }
    };
  }

  // fillInputBox = event => {
  //     this.setState(prevState => {
  //       return {
  //         loginPage.username: prevState.loginPage.username + 5
  //       };
  //     });
  //   }
  componentDidMount() {
    Promise.all([
      fetch("/api/users"),
      fetch("/api/matches"),
      fetch("/api/teams")
    ])
      .then(res => Promise.all(res.map(dataset => dataset.json())))
      .then(data => {
        this.setState({ users: data[0], matches: data[1], teams: data[2] });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.username);
    if (this.state.teams.length === 0) {
      return (
        <div>
          <Loading />
          <h1>gimme a sec...just finding the data</h1>
        </div>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/signup" render={() => <SignupPage />} />
            <Route path="/profile" render={() => <ProfilePage />} />
            <Route
              path="/passwordRecovery"
              render={() => <PasswordRecoveryPage />}
            />
            <Route
              path="/predictions"
              render={() => (
                <PredictionsPage
                  users={this.state.users}
                  matches={this.state.matches}
                />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
