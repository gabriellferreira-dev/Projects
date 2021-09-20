import { Modal } from '@mui/material';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
display: flex;
justify-content: center;
align-items: center;

& .MuiBox-root {
  width: 50%;
  background-color: #f3f3f3;
  padding: 10px;
  border-radius: 10px;
  max-height: 400px;
  overflow: hidden;
  overflow-y: auto;
  transition: all 0.3s ease;

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

  & ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    list-style: none;

    & li {
      margin: 5px 0;

      & p {
        padding: 1rem;
        border-radius: 5px 5px 0 0;
        cursor: pointer;

        &.incorrect {
          background-color: rgba(255, 0, 0, 0.9);

          & ~ div {
            background-color: rgba(255, 0, 0, 0.2);
          }
        }

        &.correct {
          background-color: rgba(0, 128, 0, 0.9);

          & ~ div {
            background-color: rgba(0, 128, 0, 0.2);
          }
        }
      }

      & div {
        display: flex;
        flex-direction: column;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease;
        font-family: 'Poppins', sans-serif;

        &.open {
          max-height: 100px;
          padding: 5px;
        }

        & span {
          display: flex;
          align-items: center;
          margin: 1px 0;

          & svg {
            margin: 0 5px;
            font-size: 2rem;
          }
        }
      }
    }
  }
}
`;