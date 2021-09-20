import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: rgba(0, 1, 25, 0.95);

  & div {
    color: #f3f3f3;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 90%;
    min-width: 300px;

    & div {
      display: flex;
      flex-direction: column;
      width: 30%;
      justify-content: space-evenly;
      height: 100%;
      padding: 10px 0;

      & p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;

        & span {
          font-weight: 500;
          font-size: 3rem;
          margin: 0 5px;
        }

        &:nth-child(1) {
          & svg {
            font-size: 3rem;
            color: rgb(0, 128, 0);
          }
        }

        &:nth-child(2) {
          & svg {
            font-size: 3rem;
            color: rgb(255, 0, 0);
          }
        }
      }
    }
  }
`;
