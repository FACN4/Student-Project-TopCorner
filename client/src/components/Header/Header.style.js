import styled from "styled-components";
import { Link } from "react-router-dom";
export const Div1 = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  background-color: #2ed573;
  &:hover ${Div1} {
    background-color: white;
  }
  &:active ${Div1} {
    background-color: #2ed573;
  }
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
export const Links = styled(Link)`
  &:visited ${Links} {
    color: black;
  }
  text-decoration: none;
  font-style: normal;
`;
export const Div = styled.div`
  font-size: 25px;
  float: right;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
export const TopCorner = styled.h1`
  position: absolute;
  right: 100px;
`;

export const NavP = styled.p`
  position: relative;
  top: 15px;
  left: 10px;
`;
