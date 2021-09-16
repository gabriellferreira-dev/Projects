import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & .lists {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    /* max-height: calc(100vh - 50px);
    height: 100%;
    justify-content: space-between; */
  }
`;