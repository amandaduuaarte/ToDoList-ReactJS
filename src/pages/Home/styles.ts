import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
