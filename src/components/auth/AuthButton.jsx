
import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

export default function AuthButton({
  title,
  onPress,
  loading = false,
  disabled = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={{
        height: 52,
        backgroundColor: "#7C3AED",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Text
          style={{
            color: "#FFF",
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
