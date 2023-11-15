import React from "react";

import {
  Checkbox,
  Container,
  Icon,
  TaskContent,
  TaskText,
  TextContainer,
} from "./style";
import CloseIcon from "../../assets/icons/trash.svg";
// import { useTasks } from "../../hooks/context";
export function Task() {
  //   const { tasks } = useTasks();

  return (
    <Container>
      <TaskContent>
        <Checkbox />
        <TextContainer>
          <TaskText>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </TaskText>
        </TextContainer>
        <Icon
          src={CloseIcon}
          alt="delete_icon"
          onClick={() => console.log("dadsa")}
        />
      </TaskContent>
    </Container>
  );
}
