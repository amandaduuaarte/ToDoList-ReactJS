import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ButtonContainer, ButtonText, Container } from "./style";

interface ButtonProps {
  title?: string;
}
export function Button({ title }: ButtonProps) {
  return (
    <Container>
      <ButtonContainer>
        <ButtonText>{title || "Criar"}</ButtonText>
        <AddCircleOutlineIcon sx={{ marginLeft: 1 }} />
      </ButtonContainer>
    </Container>
  );
}
