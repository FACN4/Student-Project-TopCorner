import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { HomeDiv } from "./HomePage.style.js";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HomeDiv>
          <p>
            `The Football Prediction game was started for the World Cup 1994 by
            a small group of friends. The competition had about 30 people in it,
            all friends or friends of friends. Since then we've organised the
            Predictions Pool for all European Championships and World Cups
            since.`
          </p>
        </HomeDiv>
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
