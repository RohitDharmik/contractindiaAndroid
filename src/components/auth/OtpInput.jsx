
import React from "react";
import {
  TextInput,
} from "react-native";

export default function OtpInput({
  value,
  onChangeText,
}) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      keyboardType="number-pad"
      maxLength={6}
      style={{
        height: 60,
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 12,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "700",
      }}
    />
  );
}
