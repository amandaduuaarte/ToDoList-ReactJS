import React from "react";
import { Container } from "./styles";

interface TextFieldProps {
  placeholder?: string;
}
export function TextField({ placeholder }: TextFieldProps) {
  return <Container type="text" placeholder={placeholder} />;
}
