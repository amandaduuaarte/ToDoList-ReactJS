import styled from "styled-components";
import { colors, screens } from "../../style";

interface TaskProps {
  isDone?: boolean;
}
export const Container = styled.div`
  display: flex;
  background: ${colors.base["gray-500"]};
  height: 5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid ${colors.base["gray-500"]};
  margin: 8px 0;
  font-family: "Inter";
  justify-content: space-around;
`;

export const TaskContent = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  width: 80%;
  text-align: center;
`;

export const TaskText = styled.p<TaskProps>`
  color: ${({ isDone }) =>
    isDone ? colors.base["gray-300"] : colors.text.white};
  font-size: 1rem;
  font-weight: 400;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};

  @media (max-width: ${screens.smartphone.max}px) {
    font-size: 1rem;
  }

  @media (max-width: ${screens.tablet.max}px) {
    font-size: 1.2rem;
  }
`;

export const Checkbox = styled.input.attrs({ type: "radio" })`
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  background: ${colors.background["purple-dark"]};

  @media (max-width: ${screens.smartphone.max}px) {
    height: 1.6rem;
    width: 1.6rem;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;
