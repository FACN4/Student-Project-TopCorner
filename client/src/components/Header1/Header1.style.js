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

export const Div = styled.div`
  width: 3%;
  float: right;
  margin: 0 auto    ;
  padding-right : 10px;

`
export const Profileimg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 45%;
  top : 0px;
  right : 0px;
`

export const topCorner = styled.h1`
  line-height: 100%;
`
export const Links = styled(Link)`
&:hover ${Links} {
display:inline-block;
background-color: white;
background-size: cover;
}
&:visited ${Links}{
  color : black;
}
&:active ${Links}{
  color : lime;
}
display : flex;
flex-direction: column;
font-size : 22px;
`
