import React, { Component } from "react";
import styled from "styled-components";

const StyledHeaderDiv = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 75px;
  background-color: #2ed573;
`;
const StyledHeaderImg = styled.img`
  height: 100%;
  position: relative;
  left: 0px;
  top: 0px;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  render() {
    return (
      <StyledHeaderDiv>
        <StyledHeaderImg src="https://5.imimg.com/data5/IJ/JK/MY-11744895/playing-football-500x500.jpg" />
      </StyledHeaderDiv>
    );
  }
}

// class Customers extends Component {
//   constructor() {
//     super();
//     this.state = {
//       customers: []
//     };
//   }
//
//   render() {
//     return (
//       <div>
//         <Header>Customers</Header>
//         <ul>
//           {this.state.customers.map(customer => (
//             <Customer key={customer.id}>
//               {customer.firstName}
//               {customer.lastName}{" "}
//             </Customer>
//           ))}
//         </ul>
//       </div>
//     );
//   }
//   componentDidMount() {
//     fetch('/api/customers')
//     .then(res => res.json())
//     .then(customers => this.setState({customers}, () => console.log('Customers fetched..',customers)))
//     .catch(err => console.log(err))
//   }
// }
// }

export default Header;
