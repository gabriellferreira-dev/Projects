// https://loading.io/css/

import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {
    transform: scale(30);
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
  height: 100vh;
  
   & div {
    /* position: absolute; */
    /* width: 16px;
    height: 16px; */
    /* border-radius: 50%; */
    /* background: #000119; */
    transform: scale(2);
    animation: ${loaderAnimation} 1s linear infinite;
    /* animation: ${loaderAnimation} 1.2s linear infinite; */
  }
  /*
  & div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  & div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  & div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  & div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  & div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  & div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  & div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  & div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  & div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  } */
`;
