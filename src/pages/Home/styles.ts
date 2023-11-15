import styled from "styled-components";
import { colors } from "../../style/colors";

interface StatusTasksProps {
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 25rem;
  align-self: center;
`;

export const CreateTasksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -2rem;
  width: 100%;

  div {
    width: 85%;
  }
`;

export const StatusTasksContainer = styled.div<StatusTasksProps>`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  height: auto;
  width: 100%;

  p {
    font-weight: 700;
    color: ${colors.background["blue-dark"]};
  }
`;

export const TasksIndicator = styled.div`
  background: ${colors.base["gray-400"]};
  flex-direction: row;
  display: inline-block;
  border-radius: 12px;
  width: auto;
  padding: 0 4px;
  height: 20px;
  text-align: center;
  color: ${colors.base["gray-100"]};
`;
