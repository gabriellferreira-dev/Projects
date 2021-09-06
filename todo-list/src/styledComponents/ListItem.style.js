import styled, { css } from 'styled-components';

export const ListItem = styled.div`
  overflow: hidden;
  transition: all 0.2s;
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.24);
  background-color: #aebeca;
  padding: 5px;
  margin: 3px 0;
  font-family: Poppins, sans-serif;
  overflow: hidden;
  display: flex;
  align-items: center;

  & span {
    padding: 0 2rem;
  }

  &:nth-child(2n - 1) {
    background-color: #aebeca9c;
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
      transform: scale(0.98);
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.24);

      & span {
        /* padding: 0 5px; */
      }
    `};
  ${({ selected }) =>
    selected &&
    css`
      background-color: #10111060 !important;
      /* transition: all 0.2s ease-in-out; */

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
      /* max-height: 0px;
      padding: 0; */

      & svg,
      & i {
        visibility: visible;
        opacity: 1;
        transition: all 0.2s;
        color: #005014;
        z-index: 50;
      }
    `};
`;
