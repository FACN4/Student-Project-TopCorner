import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import InputBox from "../../components/InputBox/InputBox.js";
import Button from "../../components/Button/Button.js";
import send from "../../assets/images/send.png";
import { PasswordRecoveryDiv } from "./PasswordRecoveryPage.style.js";

class PasswordRecoveryPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PasswordRecoveryDiv>
          <p>Forgot your password ?</p>
          <p>
            Enter your email address and we will send you a link to reset your
            password
          </p>
          <InputBox type="email" name="Email" />

          <Button img={send} text="Send" />
        </PasswordRecoveryDiv>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PasswordRecoveryPage;
