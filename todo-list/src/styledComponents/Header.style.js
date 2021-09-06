import styled from 'styled-components';

export const Header = styled.header`
  display: 'flex';
  justify-content: 'center';
  height: 50px;
  width: 100%;
  background-color: #fff;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 3rem;
    color: #2665ae;
    position: relative;
    font-family: 'Montserrat', sans-serif;

    & span {
      font-weight: 400;
      font-size: 1.6rem;
      position: relative;
      left: -5px;
      font-style: italic;    
    }
  }
`;
