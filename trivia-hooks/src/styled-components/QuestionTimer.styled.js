import styled, { keyframes, css } from 'styled-components';

const circleAnimation = keyframes`
  to {
    stroke: red;
  }
`;

export const StyledQuestionTimer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  opacity: 1;

  ${({ timeLeft, isAnswered }) =>
    (!timeLeft || isAnswered) &&
    css`
      opacity: 0;
    `}

  & span {
    position: absolute;
  }

  & svg {
    width: 50px;
    height: 50px;

    & circle {
      stroke: white;
      stroke-width: 5;
      fill: transparent;
      transition: 30s stroke-dashoffset linear;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;

      &:nth-child(1) {
        animation: ${circleAnimation} 30s linear;
      }

      &:nth-child(2) {
        stroke: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
