import styled from "styled-components";
import { Link } from "react-router-dom";


export const topCorner = styled.h1`
color : white;
`
export const HeaderImg = styled.img`
  height: 90%;
  position: relative;
  left: 5px;
  top: 5%;
`

export const HeaderDiv = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 90px;
  background-color: #2ed573;
`
export const Div = styled.div`
width: 18%;
float: right;
margin: 3% ;
display : flex;
justify-content: space-between;
${'' /* flex-direction: row; */}
font-size : 29px;

`

export const Links = styled(Link)`
&:hover ${Links} {
display:inline-block;
background-color: white;
}
&:visited ${Links}{
  color : black;
}
&:active ${Links}{
  color : lime;
}
`
