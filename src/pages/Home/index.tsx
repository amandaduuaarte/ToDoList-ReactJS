import React, { useEffect, useState } from "react";
import { Button, Header, NotFound, Tasks, TextField } from "../../components";
import {
  Container,
  CreateTasksContainer,
  InlineBlock,
  InputContent,
  StatusTasksContainer,
  TasksIndicator,
  TasksList,
  TasksStorageContainer,
} from "./styles";
import { colors } from "../../style/colors";
import { useTasks } from "../../hooks/useTasks";

interface TasksData {
  id: string;
  title: string;
  isDone: boolean;
}

export function Home() {
  const [newTask, setNewTask] = useState<string>();
  const [error, setError] = useState<string>();
  const { tasks, doneList, createTask, getAllTasks } = useTasks();

  const handleError = (): void => {
    setError("O título da task não pode ser vazio.");
  };

  const handleTasks = (value?: string) => {
    setNewTask(value);

    if (!value) {
      handleError();
    }
  };

  const handleCreateTask = (): void => {
    createTask({
      id: Math.random().toString(),
      title: newTask || "",
      isDone: false,
    });
    setError("");
  };

  useEffect(() => {
    getAllTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />

      <CreateTasksContainer>
        <InputContent>
          <TextField
            placeholder="Adicione uma nova tarefa"
            onChangeText={(value?: string) => handleTasks(value)}
            error={error}
          />
        </InputContent>
        <Button
          callback={() =>
            newTask && newTask?.length > 0 ? handleCreateTask() : handleError()
          }
        />
      </CreateTasksContainer>
      <TasksList>
        <StatusTasksContainer>
          <InlineBlock>
            <p>Tarefas criadas</p>{" "}
            <TasksIndicator>{tasks?.length || "0"}</TasksIndicator>
          </InlineBlock>

          <InlineBlock>
            <p style={{ color: colors.background["purple-dark"] }}>
              Concluídas
            </p>{" "}
            <TasksIndicator>
              {tasks?.length > 0 && doneList > 0
                ? `${doneList} de ${tasks.length}`
                : doneList}
            </TasksIndicator>
          </InlineBlock>
        </StatusTasksContainer>

        {tasks?.length === 0 ? (
          <NotFound />
        ) : (
          <TasksStorageContainer>
            {tasks?.map((task: TasksData) => <Tasks data={task} />)}
          </TasksStorageContainer>
        )}
      </TasksList>
    </Container>
  );
}
