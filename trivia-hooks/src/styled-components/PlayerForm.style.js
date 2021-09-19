import styled from 'styled-components';

export const PlayerForm = styled.div`
  flex-direction: column;

  & p {
    font-weight: 500;
  }

  & div {
    font-size: 1.6rem;
    & label {
      font-size: 1.6rem;
      color: #f3f3f3;
    }
  }

  & button {
    padding: 10px 30px;
    font-size: 1.8rem;
    color: #f3f3f3;
    background-color: #e3001a;

    &:hover {
      background-color: #e3001a !important;
      opacity: 0.8;
    }
  }

  & button.Mui-selected {
    background-color: #ff3b63;
    color: #f3f3f3;
  }
`;
