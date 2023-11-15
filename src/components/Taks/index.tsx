import React, { useState } from "react";
import { Delete } from "@mui/icons-material";

import { Container, Icon, TaskContent, TaskText, TextContainer } from "./style";
import { Checkbox } from "../Checkbox";
import { colors } from "../../style/colors";

export function Task() {
  const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <Container>
      <TaskContent>
        <Checkbox isDone={() => setIsDone(!isDone)} done={isDone} />
        <TextContainer>
          <TaskText isDone={isDone}>
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
