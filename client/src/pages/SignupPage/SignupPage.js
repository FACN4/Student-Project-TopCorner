import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import register from "../../assets/images/register.png";
import InputBox from "../../components/InputBox/InputBox.js";
import Button from "../../components/Button/Button.js";
import { SignupDiv, ErrorMsg, SuccessMsg } from "./SignupPage.style.js";

class SignupPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SignupDiv>
          <h1> Sign Up </h1>
          <form onSubmit={this.props.handleRegister} method="post">
            <label>
              <InputBox
                titleProp="Username"
                nameProp="newUsername"
                typeProp="text"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <label>
              <InputBox
                titleProp="Email"
                nameProp="newEmail"
                typeProp="email"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <label>
              <InputBox
                titleProp="Password"
                nameProp="newPassword"
                typeProp="password"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <label>
              <InputBox
                titleProp="Confirm Password"
                nameProp="newPasswordConfirm"
                typeProp="password"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <Button
              imgProp={register}
              textProp="Register"
              disabledProp={this.props.disabledProp}
            />
          </form>
          <ErrorMsg>
            {this.props.signupError} {this.props.createUserError}
          </ErrorMsg>
          <SuccessMsg> {this.props.signupSuccess}</SuccessMsg>
        </SignupDiv>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SignupPage;
