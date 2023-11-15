import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Container } from "./styles";
import { colors } from "../../style/colors";

export function Checkbox() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Container isChecked={isChecked} onClick={() => setIsChecked(!isChecked)}>
      {isChecked && (
        <CheckIcon sx={{ color: colors.text.white, fontSize: 12 }} />
      )}
    </Container>
  );
}
