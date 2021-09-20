import styled from 'styled-components';

export const PlayerContainer = styled.div`
  & div:nth-child(1) {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0;
    cursor: pointer;
    margin: 3px 0;
    
    & span {
      display: flex;
      align-items: center;

      :nth-child(1) {
        text-transform: uppercase;
        font-weight: 500;
      }
      pointer-events: none;
    }

    & svg {
      font-size: 2rem;
      color: #000119;
      margin: 0 5px;
      pointer-events: none;
    }
  }

  & div:nth-child(2) {
    max-height: 0;
    overflow: hidden;
    transition: all 0.2s linear;
    overflow-y: auto;

    ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

    &.open {
      max-height: 200px;
    }

    & ul {
    }
  }
`;
