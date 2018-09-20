import React, { Component } from "react";
import Header1 from "../../components/Header1/Header1.js";
import Table from "../../components/Table/Table.js";
import Footer from "../../components/Footer/Footer.js";
import CommentBox from "../../components/CommentBox/CommentBox.js";

import WhiteBar from "../../components/WhiteBar/WhiteBar.js";
import edit from "../../assets/images/edit.png";
import dropDown from "../../assets/images/dropDown.svg";
class PredictionsPage extends Component {
  render() {
    return (
      <div>
        <Header1
          handleLogout={this.props.handleLogout}
          dropDown={this.props.dropDown}
          dropDownView={this.props.dropDownView}
        />
        <WhiteBar />
        <Table users={this.props.users} matches={this.props.matches} />
        <CommentBox
          handleChange={this.props.handleChange}
          handlePostComment={this.props.handlePostComment}
          comments={this.props.comments}
          currentComment={this.props.currentComment}
        />
      </div>
    );
  }
}

export default PredictionsPage;
