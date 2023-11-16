import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ButtonContainer, ButtonText, Container } from "./style";

interface ButtonProps {
  callback: () => void;
}
interface ButtonProps {
  title?: string;
}
export function Button({ title, callback }: ButtonProps) {
  return (
    <Container onClick={() => callback()}>
      <ButtonContainer>
        <ButtonText>{title || "Criar"}</ButtonText>
        <AddCircleOutlineIcon sx={{ marginLeft: 1 }} />
      </ButtonContainer>
    </Container>
  );
}
