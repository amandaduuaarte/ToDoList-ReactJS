import React from "react";
import { Button, Header, NotFound, Tasks, TextField } from "../../components";
import {
  Container,
  CreateTasksContainer,
  InlineBlock,
  StatusTasksContainer,
  TasksIndicator,
} from "./styles";
import { colors } from "../../style/colors";
import { useTasks } from "../../hooks/useTasks";

interface TasksData {
  id: string;
  title: string;
  isDone: boolean;
}

export function Home() {
  const { tasks, createTask } = useTasks();

  return (
    <>
      <Header />
      <Container>
        <CreateTasksContainer>
          <div>
            <TextField placeholder="Adicione uma nova tarefa" />
          </div>
          <Button
            callback={() =>
              createTask({
                id: "02",
                title: "tester 2",
                isDone: false,
              })
            }
          />
        </CreateTasksContainer>
        <StatusTasksContainer>
          <InlineBlock>
            <p>Tarefas criadas</p>{" "}
            <TasksIndicator>{tasks?.length || "0"}</TasksIndicator>
          </InlineBlock>

          <InlineBlock>
            <p style={{ color: colors.background["purple-dark"] }}>
              Concluídas
            </p>{" "}
            <TasksIndicator>0</TasksIndicator>
          </InlineBlock>
        </StatusTasksContainer>
        {tasks?.length < 0 ? (
          <NotFound />
        ) : (
          tasks?.map((task: TasksData) => <Tasks data={task} />)
        )}
      </Container>
    </>
  );
}
