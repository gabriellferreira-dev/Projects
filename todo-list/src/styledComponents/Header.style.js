import styled from 'styled-components';

export const Header = styled.header`
  display: 'flex';
  justify-content: 'center';

  h2 {
    font-weight: 600;
    font-size: 3rem;
    color: #2665ae;
    position: relative;

    & span {
      font-weight: 200;
      font-size: 1.6rem;
      position: relative;
      left: -5px;
      font-style: italic;    
    }
  }
`;
