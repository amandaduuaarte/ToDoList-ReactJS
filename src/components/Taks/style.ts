import styled from "styled-components";
import { colors } from "../../style/colors";

export const Container = styled.div`
  display: flex;
  background: ${colors.base["gray-500"]};
  height: 5rem;
  width: 29rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.base["gray-700"]};
  margin: 8px 0;
`;

export const TaskContent = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  width: 70%;
`;

export const TaskText = styled.p`
  color: ${colors.text.white};
  font-size: 0.8rem;
  font-weight: 400;
`;

export const Checkbox = styled.input.attrs({ type: "radio" })`
  height: 1rem;
  width: 1rem;
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 16px;
  width: 16px;
  cursor: pointer;
`;
