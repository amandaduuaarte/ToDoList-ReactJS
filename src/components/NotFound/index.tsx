import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Container, Text } from "./styles";
import { colors } from "../../style/colors";

export function NotFound() {
  return (
    <Container>
      <ListAltIcon
        sx={{ color: colors.base["gray-300"], fontSize: 64, marginBottom: 5 }}
      />
      <Text bold>Você ainda não tem tarefas cadastradas.</Text>{" "}
      <Text>Crie tarefas e organize seus itens a fazer</Text>
    </Container>
  );
}
