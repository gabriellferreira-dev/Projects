import styled from 'styled-components';

export const GameSection = styled.section`
  display: flex;
  width: 100%;
  height: calc(100% - 100px);
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  background-color: #000119;

  & > button {
    position: absolute;
    font-size: 1.6rem;
    top: -70px;
    right: 20px;
    color: #e3001a;
    background-color: transparent !important;
    border: 1px solid #e3001a;
    /* padding: 10px 50px; */
  }
`;
