import React, { Component } from "react";
import Button from "../Button/Button.js";
import InputComment from "../../components/InputComment/InputComment.js";

import { MainDiv, ChatDiv, CommentDiv } from "./CommentBox.style";
import edit from "../../assets/images/edit.png";

class Chat extends Component {
  displayComments = () => {
    let commentLog = [];
    this.props.comments.forEach(comment => {
      commentLog.push(
        <div>
          {comment.username}: {comment.comment}
        </div>
      );
    });
    return commentLog;
  };
  render() {
    return (
      <MainDiv>
        <ChatDiv> {this.displayComments()}</ChatDiv>
        <form onSubmit={this.props.handlePostComment}>
          <CommentDiv>
            <InputComment
              nameProp="currentComment"
              typeProp="text"
              onChangeProp={this.props.handleChange}
            />
          </CommentDiv>
          <Button imgProp={edit} textProp="Comment" on />
        </form>
      </MainDiv>
    );
  }
}

export default Chat;
