import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import InputBox from "../../components/InputBox/InputBox.js";
import Button from "../../components/Button/Button.js";
import Login from "../../assets/images/register.png";
import { Link } from "react-router-dom";
import { LoginDiv, ErrorMsg, ErrorDiv } from "./LoginPage.style.js";

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LoginDiv>
          <h1> Log In </h1>
          <form onSubmit={this.props.handleLogin} method="post">
            <label>
              <InputBox
                titleProp="Username"
                nameProp="username"
                typeProp="text"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <label>
              <InputBox
                titleProp="Password"
                nameProp="password"
                typeProp="password"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <Button imgProp={Login} textProp="login" />
          </form>
          <ErrorDiv>
            <ErrorMsg>{this.props.loginError}</ErrorMsg>
            <Link to="/passwordRecovery">Forgot password?</Link>
          </ErrorDiv>
        </LoginDiv>

        <Footer />
      </React.Fragment>
    );
  }
}

export default LoginPage;
