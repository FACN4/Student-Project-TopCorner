import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 90px;
  background-color: #2ed573;
`;
export const HeaderImg = styled.img`
  height: 90%;
  position: relative;
  left: 5px;
  top: 5%;
`;
export const Links = styled(Link)`
  font-style :normal;
  &:hover ${Links} {
  display:inline-block;
  background-color: white;
}
`
export const Div = styled.div`
margin : 49px 10px;
font-size:28px;
float : right ;
width: 15%;
display : flex;
justify-content: space-between;
`
