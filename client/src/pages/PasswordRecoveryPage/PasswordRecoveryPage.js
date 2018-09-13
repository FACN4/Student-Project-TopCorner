import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import InputBox from "../../components/InputBox/InputBox.js";
import Button from "../../components/Button/Button.js";
import send from "../../assets/images/send.png";
import { Link } from "react-router-dom";

class PasswordRecoveryPage extends Component {
  render() {
    return (
      <div>
        <p>Forgot your password ?</p>
        <p>
          Enter your email address and we will send you a link to reset your
          password
        </p>
        <InputBox type="email" name="Email" />

        <Button img={send} text="Send" />
        <Footer />
      </div>
    );
  }
}

export default PasswordRecoveryPage;
