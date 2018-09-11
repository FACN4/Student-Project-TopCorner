import React, { Component } from "react";
import Customers from "./customers";
import styled from 'styled-components';

const Header = styled.h1`
  display :flex;
  justify-content : center;
  color : green;
`

class App extends Component {
  render() {
    return(
    <div>
    <Header>Hello World</Header>
    <Customers/>
    </div>
);
  }
}


export default App;
