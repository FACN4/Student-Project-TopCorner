import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PredictionsPage from "../../pages/PredictionsPage/PredictionsPage";
import HomePage from "../../pages/HomePage/HomePage.js";
import LoginPage from "../../pages/LoginPage/LoginPage.js";
import SignupPage from "../../pages/SignupPage/SignupPage.js";
import ProfilePage from "../../pages/ProfilePage/ProfilePage.js";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.js";
import PasswordRecoveryPage from "../../pages/PasswordRecoveryPage/PasswordRecoveryPage.js";
import Loading from "react-loading-animation";
import Cookies from "js-cookie";
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
      signupSuccess: "",
      disabledProp: true,
      loginError: "",
      userLoggedIn: "",
      auth: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
  handleLogout(event) {
    Cookies.remove("user_auth");
    this.setState({
      auth: false
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
        this.setState({ loginError: res.status });
        if (res.cookie) {
          Cookies.set("user_auth", res.cookie);
          this.setState({
            auth: true,
            userLoggedIn: res.user
          });
        }
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
      .catch(() =>
        this.setState({
          signupError: "Username and/or email already exist"
        })
      );
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
              render={() =>
                !this.state.auth ? (
                  <LoginPage
                    handleChange={this.handleChange}
                    handleLogin={this.handleLogin}
                    username={this.state.username}
                    password={this.state.password}
                    loginError={this.state.loginError}
                  />
                ) : (
                  <Redirect to="/predictions" />
                )
              }
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
                  signupSuccess={this.state.signupSuccess}
                />
              )}
            />
            <Route path="/signup" render={() => <SignupPage />} />
            <Route
              path="/profile"
              render={() =>
                this.state.auth ? (
                  <ProfilePage users={this.state.users} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              path="/passwordRecovery"
              render={() => <PasswordRecoveryPage />}
            />
            <Route
              path="/predictions"
              render={() =>
                this.state.auth ? (
                  <PredictionsPage
                    users={this.state.users}
                    matches={this.state.matches}
                    handleLogout={this.handleLogout}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
