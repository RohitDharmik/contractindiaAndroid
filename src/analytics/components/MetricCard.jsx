
import React from "react";
import { View, Text } from "react-native";

export default function MetricCard({ title, value }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
      }}
    >
      <Text>{title}</Text>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>
        {value}
      </Text>
    </View>
  );
}
