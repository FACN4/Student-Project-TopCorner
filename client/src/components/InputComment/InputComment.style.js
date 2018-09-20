import styled from "styled-components";

export const StyledInputComment = styled.input`
  position: relative;
  left: 20px;
  top: 20px;
  height: 90px;
  width: 90%;
  border-color: white;
  border: none;
  font-size: 20px;
  &:focus ${StyledInputComment} {
    outline: none;
  }
`;
