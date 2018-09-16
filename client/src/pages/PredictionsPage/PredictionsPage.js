import React, { Component } from "react";
import Header from "../../components/Header/Header.js";
import Table from "../../components/Table/Table.js";
import Footer from "../../components/Footer/Footer.js";

class PredictionsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Table users={this.props.users} matches={this.props.matches} />
        <Footer />
      </div>
    );
  }
}

export default PredictionsPage;
