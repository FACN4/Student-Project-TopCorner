import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import register from "../../assets/images/register.png";
import InputBox from "../../components/InputBox/InputBox.js";
import Button from "../../components/Button/Button.js";
import { SignupDiv } from "./SignupPage.style.js";

class SignupPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SignupDiv>
          <p> Sign Up </p>
          <form onSubmit={this.props.handleRegister} method="post">
            <label>
              <p> Username</p>
              <InputBox
                nameProp="newUsername"
                typeProp="text"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <label>
              <p>Email</p>
              <InputBox
                nameProp="newEmail"
                typeProp="email"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <label>
              <p>Password</p>
              <InputBox
                nameProp="newPassword"
                typeProp="password"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <label>
              <p> confirm password </p>
              <InputBox
                nameProp="newPasswordConfirm"
                typeProp="password"
                onChangeProp={this.props.handleChange}
              />
            </label>
            <Button imgProp={register} textProp="Register" />
          </form>
        </SignupDiv>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SignupPage;
