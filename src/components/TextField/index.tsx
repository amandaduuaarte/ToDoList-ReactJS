/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from "react";

import { Container, ErrorLabel } from "./styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
  onChangeText: (value?: string) => void;
}
export function TextField({
  placeholder,
  onChangeText,
  error,
  ...rest
}: TextFieldProps) {
  return (
    <>
      <Container
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)}
        {...rest}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
}
