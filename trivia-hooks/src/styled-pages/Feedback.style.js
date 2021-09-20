import styled from 'styled-components';

export const StyledFeedback = styled.section`
  width: 100%;
  height: 100%;
  background-color: #000119;
  color: #f3f3f3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  min-height: 300px;

  & div:nth-child(1) {
    background-color: rgba(227, 0, 26, 0.2);
    display: flex;
    align-items: center;
    width: 40%;
    height: 40%;
    flex-direction: column;
    justify-content: space-evenly;
    min-width: 300px;
    min-height: 200px;

    & > p {
      /* margin: 50px 0; */
      font-size: 2.5rem;
    }

    & > div {
      background-color: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      width: 200px;
      height: 50px;
      justify-content: space-evenly;
      border-radius: 10px;

      & span {
        display: flex;
        align-items: center;
        font-size: 3rem;

        & svg {
          font-size: 3rem;
          margin: 0 5px;
        }

        &:nth-child(1) svg {
          color: green;
        }

        &:nth-child(2) svg {
          color: red;
        }
      }
    }

    & > span {
      font-size: 4rem;
      font-weight: bold;
      text-align: center;
    }
  }
`;
