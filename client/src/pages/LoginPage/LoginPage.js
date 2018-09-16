import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import InputBox from "../../components/InputBox/InputBox.js";
import Button from "../../components/Button/Button.js";
import Login from "../../assets/images/register.png";
import { Link } from "react-router-dom";
import { LoginDiv } from "./LoginPage.style.js";

class LoginPage extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Header />
        <LoginDiv>
          <form onSubmit={this.handleSubmit}>
            <InputBox
              type="text"
              value={this.props.data.username}
              defaultValue="ben"
              onChange={this.props.functions}
            />
            <InputBox
              type="password"
              value={this.props.data.password}
              defaultValue="password"
            />
            {/* <Link to="/predictions"> */}
            <Button img={Login} text="login" />
            {/* </Link> */}
          </form>
          <Link to="/passwordRecovery">forgot password</Link>
        </LoginDiv>
        <Footer />
      </React.Fragment>
    );
  }
}

export default LoginPage;
{
  /* <p>Login</p>
<InputBox
  type="text"
  name="Username"
  value="ben"
  onChange={this.props.functions}
/>
<InputBox type="password" name="Password" />
<Link to="/predictions">
<Button img={Login} text="login" />
</Link>
<Link to="/passwordRecovery">forgot password</Link> */
}
