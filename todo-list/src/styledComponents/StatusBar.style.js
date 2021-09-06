import styled from 'styled-components';

export const StatusBar = styled.div`
  display: flex;
  margin: 15px 0;

  
  &>div {
    position: relative;
    
    & svg {
      font-size: 3rem;
      color: green;
    }
    
    & div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: auto;
      color: #fff;
      background-color: green;
      border-radius: 50%;
      padding: 2px;
      width: 2rem;
      height: 2rem;
      right: -10px;
      top: -10px;
    }
  }
`;