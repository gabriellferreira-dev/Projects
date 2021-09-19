import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  color: #f3f3f3;
  background-color: rgba(0, 1, 25, 0.95);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & div {
    display: flex;
    width: 30%;
    justify-content: space-evenly;
    height: 100%;
    align-items: flex-end;
    padding: 10px 0;

    & p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: 700;


      & span {
        font-weight: 500;
        font-size: 1.8rem;
      }

      &:nth-child(1) {
        color: rgb(0, 128, 0);
      }

      &:nth-child(2) {
        align-self: flex-start;
      }

      &:nth-child(3) {
        color: rgb(255, 0, 0);
      }
    }
  }
  /* top: 0; */
  /* position: fixed; */
`;
