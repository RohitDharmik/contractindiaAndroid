
import React from "react";
import {
  TouchableOpacity,
  Text,
} from "react-native";

export default function SocialLoginButton({
  title,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          color: "#334155",
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
