/* eslint-disable @typescript-eslint/no-explicit-any */
import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    -webkit-font-smoothing:antialiased;
    font-family: 'Inter', sans-serif;
    background: ${colors.base["gray-600"]};
  }
`;
