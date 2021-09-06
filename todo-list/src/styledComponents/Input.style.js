import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 80%;
  outline: none;
  border: 2px solid #2665ae8a;
  border-radius: 3px;
  transition: 0.3s;

  &:focus,
  &:not(:placeholder-shown) {
    border: 2px solid #2665ae;
  }

`;
