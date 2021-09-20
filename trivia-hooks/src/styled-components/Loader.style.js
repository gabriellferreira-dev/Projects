// https://loading.io/css/

import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    transform: scale(4);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  
   & div {
    animation: ${loaderAnimation} 1s linear infinite;
  }
`;
