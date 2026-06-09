
import React from "react";
import AppInput from "./AppInput";

export default function PasswordInput(
  props
) {
  return (
    <AppInput
      secureTextEntry
      {...props}
    />
  );
}
