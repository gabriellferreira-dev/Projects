import { createGlobalStyle } from 'styled-components';
import Poppins from '../fonts/Poppins/Poppins-Regular.ttf';
import Montserrat from '../fonts/Montserrat/Montserrat-Regular.ttf';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('ttf');
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('ttf');
  }
`;