import styled from "styled-components";
import { colors } from "../../style";

export const Container = styled.input`
  background-color: ${colors.base["gray-500"]};
  height: 45px;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  color: ${colors.base["gray-100"]};
  padding: 0 12px;
  &:focus {
    outline: none;
  }
  margin-bottom: 8px;
`;

export const ErrorLabel = styled.p`
  font-size: 12px;
  color: ${colors.feedback.danger};
`;
