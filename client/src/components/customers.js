import React, { Component } from "react";
import "./customers.css";

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
      <h1>Customers</h1>
<ul>
  {this.state.customers.map(customer =>
  <li key={customer.id}>{customer.firstName}{customer.lastName} </li>)}
</ul>
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
