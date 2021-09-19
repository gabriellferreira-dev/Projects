import styled from 'styled-components';

export const StartGame = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    
    & button {
      font-size: 1.8rem;
      padding: 10px 50px;
    }
  }
`;
