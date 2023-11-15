import React from "react";
import { Button, Header, NotFound, TextField } from "../../components";
import {
  Container,
  CreateTasksContainer,
  StatusTasksContainer,
  TasksIndicator,
} from "./styles";
import { colors } from "../../style/colors";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <CreateTasksContainer>
          <div>
            <TextField placeholder="Adicione uma nova tarefa" />
          </div>
          <Button />
        </CreateTasksContainer>
        <StatusTasksContainer>
          <p>
            Tarefas criadas <TasksIndicator>0</TasksIndicator>
          </p>
          <p style={{ color: colors.background["purple-dark"] }}>
            Concluídas <TasksIndicator>0</TasksIndicator>
          </p>
        </StatusTasksContainer>
        <NotFound />
      </Container>
    </>
  );
}
