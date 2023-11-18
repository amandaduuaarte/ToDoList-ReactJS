import styled from "styled-components";
import { colors, screens } from "../../style";

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
`;

export const CreateTasksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -2rem;
  padding: 0 25rem;
  width: 85rem;
  flex-wrap: wrap;

  @media (max-width: ${screens.smartphone.max}px) {
    width: 100%;
    padding: 0;
    justify-content: center;
  }
`;

export const InputContent = styled.div`
  width: 80%;

  @media (max-width: ${screens.smartphone.max}px) {
    width: 60%;
    margin-right: 24px;
  }
`;

export const TasksStorageContainer = styled.div<StatusTasksProps>`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  height: auto;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: ${screens.smartphone.max}px) {
    justify-content: center;
    align-self: center;
  }
`;

export const StatusTasksContainer = styled(TasksStorageContainer)`
  p {
    font-weight: 700;
    color: ${colors.background["blue-dark"]};
  }

  @media (min-width: ${screens.tablet.min}px) {
    font-size: 1.4rem;
  }

  @media (min-width: ${screens.desktop.min}px) {
    font-size: 1.5rem;
  }
`;

export const InlineBlock = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${screens.smartphone.max}px) {
    margin-bottom: 12px;
  }
`;

export const TasksIndicator = styled.div`
  background: ${colors.base["gray-400"]};
  flex-direction: row;
  display: inline-block;
  border-radius: 12px;
  width: auto;
  padding: 0 4px;
  margin-left: 1rem;
  height: auto;
  text-align: center;
  color: ${colors.base["gray-100"]};

  @media (max-width: ${screens.smartphone.max}px) {
    margin-right: 1rem;
  }
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 64rem;

  @media (max-width: ${screens.tablet.max}px) {
    width: 80%;
  }

  @media (max-width: ${screens.desktop.min}px) {
    width: 80%;
  }
`;
