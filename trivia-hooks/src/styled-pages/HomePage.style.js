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
`;

export default HomePage;
