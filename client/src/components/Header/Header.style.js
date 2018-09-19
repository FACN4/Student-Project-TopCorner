import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-style: normal;
  &:hover ${Links} {
    display: inline-block;
    background-color: white;
  }
  &:visited ${Links} {
    color: black;
  }
  &:active ${Links} {
    color: lime;
  }
`;
export const Div = styled.div`
  margin: 35px 10px;
  font-size: 40px;
  float: right;
  width: 25%;
  display: flex;
  justify-content: space-between;
`;
export const TopCorner = styled.h1`
  position: absolute;
  right: 100px;
`;
