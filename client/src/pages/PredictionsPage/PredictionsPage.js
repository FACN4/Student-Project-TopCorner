import React, { Component } from "react";
import Header1 from "../../components/Header1/Header1.js";
import Table from "../../components/Table/Table.js";
import Footer from "../../components/Footer/Footer.js";

class PredictionsPage extends Component {
  render() {
    return (
      <div>
        <Header1 dropDown={this.props.dropDown} dropDownView={this.props.dropDownView}/>
        <Table users={this.props.users} matches={this.props.matches} />
        <Footer />
      </div>
    );
  }
}

export default PredictionsPage;
