import styled from "styled-components";
import { colors } from "../../style/colors";

interface CheckboxProps {
  isChecked: boolean;
}
export const Container = styled.div<CheckboxProps>`
  display: flex;
  height: 1rem;
  width: 1rem;
  background-color: ${({ isChecked }) =>
    isChecked ? colors.background["purple-dark"] : "transparent"};
  border-radius: 16px;
  border: 1px solid
    ${({ isChecked }) =>
      isChecked
        ? colors.background["purple-dark"]
        : colors.background["blue-dark"]};
  align-items: center;
  justify-content: center;
`;
