import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PredictionsPage from "../../pages/PredictionsPage/PredictionsPage";
import HomePage from "../../pages/HomePage/HomePage.js";
import LoginPage from "../../pages/LoginPage/LoginPage.js";
import SignupPage from "../../pages/SignupPage/SignupPage.js";
import ProfilePage from "../../pages/ProfilePage/ProfilePage.js";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.js";
import PasswordRecoveryPage from "../../pages/PasswordRecoveryPage/PasswordRecoveryPage.js";
import Loading from "react-loading-animation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      teams: [],
      matches: [],
      username: "",
      password: "",
      newUsername: "",
      newEmail: "",
      newPassword: "",
      newPasswordConfirm: "",
      signupError: "",
      createUserError: "",
      signupSuccess: "",
      disabledProp: true,
      loginError: "",
      userLoggedIn: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
      signupError: "",
      createUserError: "",
      signupSuccess: ""
    });

    let errorMessage = "";
    let disabled = true;
    if (
      this.state.newUsername.trim() === "" &&
      this.state.newPassword.trim() === "" &&
      this.state.newEmail.trim() === ""
    ) {
      errorMessage = "";
    } else if (!this.state.newUsername.match(/[0-9a-zA-Z]{6,20}/g)) {
      errorMessage =
        "Username must contain only numbers and letters with length between 6 and 20";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.newEmail)
    ) {
      errorMessage = "Must use a valid email address";
    } else if (!this.state.newPassword.match(/[0-9a-zA-z]{6,20}/g)) {
      errorMessage =
        "Password must contain only numbers and letters with length between 6 and 20";
    } else if (this.state.newPasswordConfirm !== this.state.newPassword) {
      errorMessage = "Passwords do not match";
    } else {
      errorMessage = "";
      disabled = false;
    }
    this.setState({
      signupError: errorMessage,
      disabledProp: disabled
    });
  }

  handleLogin(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          loginError: res.status
        });
      })
      .catch(err => {
        this.setState({
          loginError: err.status
        });
      });
  }

  handleRegister(event) {
    event.preventDefault();
    const data = {
      username: this.state.newUsername,
      email: this.state.newEmail,
      password: this.state.newPassword
    };
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        this.setState({
          signupSuccess: "Signup success! Please go to the login page"
        });
      })
      .catch(err => console.log(err));
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
      })
      .catch(err => console.log(err));
  }

  render() {
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
            <Route
              path="/login"
              render={() => (
                <LoginPage
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                  username={this.state.username}
                  password={this.state.password}
                  loginError={this.state.loginError}
                />
              )}
            />
            <Route
              path="/signup"
              render={() => (
                <SignupPage
                  handleChange={this.handleChange}
                  handleRegister={this.handleRegister}
                  newUsername={this.state.newUsername}
                  newPassword={this.state.newPassword}
                  newPasswordConfirm={this.state.newPasswordConfirm}
                  newEmail={this.state.newEmail}
                  signupError={this.state.signupError}
                  disabledProp={this.state.disabledProp}
                  createUserError={this.state.createUserError}
                  signupSuccess={this.state.signupSuccess}
                />
              )}
            />
            <Route path="/signup" render={() => <SignupPage />} />
            <Route
              path="/profile"
              render={() => <ProfilePage users={this.state.users} />}
            />

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
