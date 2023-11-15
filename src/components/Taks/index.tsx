import React from "react";
import { Delete } from "@mui/icons-material";

import { Container, Icon, TaskContent, TaskText, TextContainer } from "./style";
import { Checkbox } from "../Checkbox";
import { colors } from "../../style/colors";
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
        <Icon onClick={() => console.log("dadsa")}>
          <Delete sx={{ color: colors.base["gray-300"] }} />
        </Icon>
      </TaskContent>
    </Container>
  );
}
