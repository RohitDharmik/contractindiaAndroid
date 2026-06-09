import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function BiometricLoginScreen() {

  const handleAction = () => {
    console.log("BiometricLoginScreen button clicked");
  };

  return (
    <SafeAreaView
      style={
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }
    >
      <View
        style={
          width: "100%",
          alignItems: "center",
        }
      >
        <Text
          style={
            fontSize: 30,
            fontWeight: "700",
            color: "#0F172A",
            marginBottom: 12,
          }
        >
          Biometric Login
        </Text>

        <Text
          style={
            fontSize: 16,
            color: "#64748B",
            textAlign: "center",
            lineHeight: 24,
            marginBottom: 32,
          }
        >
          Use Face ID or Fingerprint authentication for secure login.
        </Text>

        <TouchableOpacity
          onPress={handleAction}
          style={
            backgroundColor: "#7C3AED",
            paddingHorizontal: 28,
            paddingVertical: 14,
            borderRadius: 12,
          }
        >
          <Text
            style={
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: 16,
            }
          >
            Authenticate
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
