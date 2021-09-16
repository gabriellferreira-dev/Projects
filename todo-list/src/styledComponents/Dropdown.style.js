import styled, { css } from 'styled-components';

export const Dropdown = styled.div`
  width: 90%;
  background-color: #d4d3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5px 0;
  overflow: hidden;

  & > button {
    width: 100%;
    padding: 15px 0;
    border: none;
    outline: none;
    background-color: ${({ buttonStyle: { bgColor } }) => bgColor};
    /* background-color: rgb(21, 155, 128); */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & span {
      z-index: 10;
      font-weight: bold;
      color: #001935;
    }

    & div {
      justify-content: center;
      align-items: center;
      display: flex;
      position: absolute;
      right: 20px;
      margin-left: 10px;
      font-weight: 600;
      font-family: Arial, sans-serif;
      font-size: 3rem;
      color: rgba(255, 255, 255, 0.6);
      z-index: 9;

      ${({ haveTask }) =>
        !haveTask &&
        css`
          display: none;
        `}
    }
  }

  & > div {
    height: 100%;
    overflow: hidden;
    /* overflow-y: scroll; */
    width: 100%;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: scaleY(1);
    transform-origin: top;
    /* max-height: 200px; */
    position: relative;

    & > span {
      align-self: center;
      height: 100%;
    }

    & > div {
      height: 100%;
      overflow-y: scroll;
    }

    ${({ active }) =>
      !active &&
      css`
        transition: all 0.3s ease;
        /* transform: scaleY(0); */
        max-height: 0;
      `}

    ${({ active }) =>
      active &&
      css`
        transition: all 0.3s ease;
        /* transform: scaleY(0); */
        max-height: 200px;
      `}
  }
`;
