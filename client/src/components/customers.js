import React, { Component } from "react";
import styled from 'styled-components';

const Customer = styled.li`
  list-style: none;
  display:flex;
  justify-content: center;
  color: skyblue;
`

const Header = styled.h1`
  display :flex;
  justify-content : center;
  color : orange;
`

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
        <Header>Customers</Header>
        <ul>
            {this.state.customers.map(customer =>
            <Customer key={customer.id}>{customer.firstName}{customer.lastName} </Customer>)}
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
