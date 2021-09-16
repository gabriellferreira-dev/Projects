import styled, { css, keyframes } from 'styled-components';

const itemAnimation = keyframes`
  0% {
    opacity: 1;
    max-height: 50px;
  }
  100% {
    opacity: 0;
    max-heigth: 0;
  }
`;

const clickEfect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  transition: all 0.2s;
  position: relative;
  background-color: rgba(21, 155, 128, 0.3);
  padding: 5px;
  margin: 3px 0;
  font-family: Poppins, sans-serif;
  font-size: 1.6rem;
  overflow: hidden;
  display: flex;
  max-height: 50px;
  align-items: center;
  
  & span {
    padding: 0 2rem;
  }

  &:nth-child(2n - 1) {
    background-color: rgba(21, 155, 128, 0.2);
  }

  & svg,
  & i {
    display: none;
    opacity: 0;
    transition: all 0.2s;
    font-size: 2rem;
  }

  ${({ active }) =>
    active &&
    css`
      animation: ${clickEfect} 0.2s linear;
    `};
  ${({ selected }) =>
    selected &&
    css`
      background-color: #10111060 !important;
      transition: transform 0.2s ease-in-out;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.24);

      & span {
        padding: 0 5px;
      }

      & svg,
      & i {
        display: block;
        visibility: visible;
        opacity: 1;
        transition: all 0.2s;
        font-size: 2rem;
      }
    `};
  ${({ concluded }) =>
    concluded &&
    css`
      animation: ${itemAnimation} 0.2s ease-out;
      max-height: 0;
      /* 
      & svg,
      & i {
        visibility: visible;
        opacity: 1;
        transition: all 0.2s;
        color: #005014;
        z-index: 50;
      } */
    `};
`;
