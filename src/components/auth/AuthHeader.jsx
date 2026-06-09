
import React from "react";
import {
  View,
  Text,
} from "react-native";

export default function AuthHeader({
  title,
  subtitle,
}) {
  return (
    <View
      style={{
        marginBottom: 32,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          color: "#0F172A",
        }}
      >
        {title}
      </Text>

      {subtitle ? (
        <Text
          style={{
            marginTop: 8,
            color: "#64748B",
            fontSize: 15,
          }}
        >
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}
