import { createGlobalStyle } from "styled-components";

import Poppins_Light from './Poppins_Light.ttf';
import Poppins_Regular from './Poppins_Regular.ttf';
import Poppins_Bold from './Poppins_Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Poppins Light';
    src: url(${Poppins_Light}) format('truetype');
  }
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${Poppins_Regular}) format('truetype');
  }
  @font-face {
    font-family: 'Poppins Bold';
    src: url(${Poppins_Bold}) format('truetype');
  }
`;