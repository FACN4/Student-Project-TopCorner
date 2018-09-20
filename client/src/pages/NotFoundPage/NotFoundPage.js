import React, { Component } from "react";
import { Div404, Header404, Small404 } from "./NotFoundPage.style.js";
class NotFoundPage extends Component {
  render() {
    return (
      <Div404>
        <Header404> 404.</Header404>
        <Small404> Page Not Found</Small404>
      </Div404>
    );
  }
}

export default NotFoundPage;
