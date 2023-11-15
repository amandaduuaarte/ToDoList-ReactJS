import styled from "styled-components";
import { colors } from "../../style/colors";

export const Container = styled.input`
  background-color: ${colors.base["gray-500"]};
  height: 45px;
  width: 100%;
  border-radius: 0.5rem;
  color: white;
  padding: 0 12px;
  border: none;

  :focus {
    border: 1px solid red;
  }
`;
