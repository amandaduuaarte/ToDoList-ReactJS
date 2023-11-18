import styled from "styled-components";
import { colors, screens } from "../../style";

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

  @media (max-width: ${screens.smartphone.max}px) {
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }

  @media (max-width: ${screens.desktop.min}px) {
    font-size: 1.5rem;
  }
`;
