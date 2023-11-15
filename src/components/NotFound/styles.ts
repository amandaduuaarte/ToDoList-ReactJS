import styled from "styled-components";
import { colors } from "../../style/colors";

interface TextProps {
  bold?: boolean;
}
export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p<TextProps>`
  font-size: 1rem;
  color: ${colors.base["gray-300"]};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
`;
