import styled, { css } from 'styled-components';

const HomePage = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000119;

  & form {
    width: 60vh;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 5px;
    padding: 50px 0;
    color: #f3f3f3;

    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      justify-content: space-evenly;

      ${({ mounted }) =>
        mounted &&
        css`
          opacity: 1;
        `}

      ${({ nextActive }) =>
        nextActive &&
        css`
          opacity: 0;
        `}
    }
  }

  & > div {
    color: #f3f3f3;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;

    & > div {
      max-width: 0;
      overflow: hidden;
      transition: all 0.2s ease;
      background-color: rgba(255, 255, 255, 0.1);
      padding: 0;
      border-radius: 2px;

      & > div {
        min-width: 205px;
      }
      
      ${({ open }) =>
        open &&
        css`
          max-width: 250px;
          padding: 5px;
        `}
    }
  }
`;

export default HomePage;
