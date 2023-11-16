import React from "react";
import { Delete } from "@mui/icons-material";

import { Container, Icon, TaskContent, TaskText, TextContainer } from "./style";
import { Checkbox } from "../Checkbox";
import { colors } from "../../style/colors";
import { useTasks } from "../../hooks/useTasks";

interface TaskProps {
  data: {
    id: string;
    title: string;
    isDone: boolean;
  };
}
export function Tasks({ data }: TaskProps) {
  const { id, isDone, title } = data;
  const { removeTask } = useTasks();
  return (
    <Container>
      <TaskContent>
        <Checkbox isDone={() => console.log(isDone)} done={isDone} />
        <TextContainer>
          <TaskText isDone={isDone}>{title}</TaskText>
        </TextContainer>
        <Icon onClick={() => removeTask(id)}>
          <Delete sx={{ color: colors.base["gray-300"] }} />
        </Icon>
      </TaskContent>
    </Container>
  );
}
