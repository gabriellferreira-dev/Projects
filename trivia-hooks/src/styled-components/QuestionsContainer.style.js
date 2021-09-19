import styled, { keyframes } from 'styled-components';

const timeOut = keyframes`
  0% {
    max-width: 100%;
    background-color: green;
  }
  50% {
  }
  100% {
    max-width: 0;
    background-color: red;
  }
`;

export const StyledQuestionsContainer = styled.div`
  width: 60%;
  height: 70vh;
  color: #dedfee;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.05);
  overflow: hidden;

  & > p {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  & div {
    display: flex;
    flex-direction: column;

    & .incorrect.answered {
      border-color: red !important;
      background-color: rgba(255, 0, 0, 0.2);
    }

    & .correct.answered {
      border-color: green !important;
      background-color: rgba(0, 128, 0, 0.2);
    }

    & button {
      border-color: #ffd833;
      color: #dedfee;
      padding: 5px 20px;
      text-align: center;
      margin: 5px;
      border-radius: 5px;
      font-size: 1.6rem;

      &:hover {
        background-color: rgba(255, 255, 0, 0.1);
        border-color: #ffd833;
      }
    }
  }
`;
