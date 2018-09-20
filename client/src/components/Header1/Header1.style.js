import styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = styled(Link)`
  &:hover ${Links} {
    display: inline-block;
    background-color: white;
    background-size: cover;
  }
  &:visited ${Links} {
    color: black;
  }
  &:active ${Links} {
    color: lime;
  }
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;
export const HeaderDiv = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100px;
  background-color: #2ed573;
  z-index: 1;
`;
export const HeaderImg = styled.img`
  height: 90%;
  position: relative;
  left: 5px;
  top: 5%;
`;

export const Div = styled.div`
  width: 3%;
  float: right;
  margin: 0 auto;
  padding-right: 10px;
`;
export const Profileimg = styled.img`
  height: 100px;
  border-radius: 45%;
  position: fixed;
  top: 0px;
  right: 0px;
`;

export const TopCorner = styled.h1`
  position: fixed;
  left: 90px;
  top: -25px;
`;

export const Button = styled.button`
  height: 45px;
  width: 165px;
  background-color: #2ed573;
  font-weight: bolder;
`;

export const Dropdown = styled.div`
  position: fixed;
  right: 0px;
  top: 100px;
  background-color: #dfe4ea;
  width: 165px;
`;
export const DropdownElement = styled.div`
  background-color: #dfe4ea;
  width: 100%;
  height: 40px;
`;
