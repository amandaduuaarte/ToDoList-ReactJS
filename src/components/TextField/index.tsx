/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Container, ErrorLabel } from "./styles";

interface TextFieldProps {
  placeholder?: string;
  error?: string;
  onChangeText: (value?: string) => void;
}
export function TextField({
  placeholder,
  onChangeText,
  error,
}: TextFieldProps) {
  return (
    <>
      <Container
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
}
