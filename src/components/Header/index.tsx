import React from "react";
import { Container, HeaderText } from "./style";
import { colors } from "../../style/colors";

// interface headerProps {
//   onOpenModalNewTaks: () => void;
// }

export function Header() {
  return (
    <Container>
      <HeaderText color={colors.background["blue-dark"]}>
        to<HeaderText>do</HeaderText>
      </HeaderText>
    </Container>
  );
}
