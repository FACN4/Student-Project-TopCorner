import React, { Component } from "react";

class Customers extends Component {
  constructor(){
    super();
    this.state={
      customers:[]
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }

  componentDidMount() {
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched..',customers)))
    .catch(err => console.log(err))
  }
}

export default Customers;
