import React from "react";
import { Button, Header, NotFound, TextField } from "../../components";
import { Container, CreateTasksContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <CreateTasksContainer>
          <div>
            <TextField placeholder="Adicione uma nova tarefa" />
          </div>
          <Button />
        </CreateTasksContainer>
        <NotFound />
      </Container>
    </>
  );
}
