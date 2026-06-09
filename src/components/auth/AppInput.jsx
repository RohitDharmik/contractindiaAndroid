
import React from "react";
import {
  View,
  Text,
  TextInput,
} from "react-native";

export default function AppInput({
  label,
  error,
  ...props
}) {
  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      {label ? (
        <Text
          style={{
            marginBottom: 6,
            color: "#334155",
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      ) : null}

      <TextInput
        {...props}
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: error
            ? "#EF4444"
            : "#CBD5E1",
          borderRadius: 12,
          paddingHorizontal: 14,
        }}
      />

      {error ? (
        <Text
          style={{
            color: "#EF4444",
            marginTop: 4,
          }}
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
}
