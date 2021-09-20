import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    color: #e3001a;
  }
  50% {
    color: #dedfee;
    opacity: 0.5;
  }
  75% {
    color: #ffd833;
    opacity: 0.7;
  }
  100% {
    color: #e3001a;
  }
`;

export const StartingAnimation = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000119;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & span {
    color: #e3001a;
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    transition: all 1s linear;

    animation: ${animation} 5s linear infinite;
  }
`;
