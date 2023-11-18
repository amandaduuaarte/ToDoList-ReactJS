import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Container } from "./styles";
import { colors } from "../../style/colors";

interface CheckboxProps {
  done: boolean;
  isDone: () => void;
}
export function Checkbox({ isDone, done }: CheckboxProps) {
  return (
    <Container isChecked={done} onClick={() => isDone()}>
      {done && <CheckIcon sx={{ color: colors.text.white, fontSize: 12 }} />}
    </Container>
  );
}
