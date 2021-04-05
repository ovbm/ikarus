import { createGlobalStyle } from 'styled-components';
import fontFiles from './fonts';

const fontStyles = createGlobalStyle`
  @font-face {
    font-family: "B612Mono";
    font-style: normal;
    font-weight: 400;
    src: url(${fontFiles.B612MonoRegular}) format("truetype");
  }
  @font-face {
    font-family: "B612Mono";
    font-style: normal;
    font-weight: 500;
    src: url(${fontFiles.B612MonoMedium}) format("truetype");
  }
  @font-face {
    font-family: "B612Mono";
    font-style: normal;
    font-weight: 600;
    src: url(${fontFiles.B612MonoBold}) format("truetype");
  }
  `;

export default fontStyles;