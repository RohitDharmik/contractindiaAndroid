
import React from "react";
import {
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function AuthLayout({
  children,
}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
