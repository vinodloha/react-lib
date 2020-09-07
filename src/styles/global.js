import { createGlobalStyle, css } from "styled-components";

import modernCSSReset from './modernCSSReset';

export const bodyStyles = css`
  ${modernCSSReset}
`;

export const GlobalStyle = createGlobalStyle`
  body{
    ${bodyStyles}
  }
`;
