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
          <p>Sign Up</p>
          <InputBox type="text" name="Username" />
          <InputBox type="email" name="Email Address" />
          <InputBox type="password" name="Password" />
          <InputBox type="password" name="Confirm Password" />
          <Button img={register} text="Register" />
        </SignupDiv>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SignupPage;
