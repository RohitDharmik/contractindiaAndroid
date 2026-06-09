import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function SessionExpiredScreen() {

  const handleAction = () => {
    console.log("SessionExpiredScreen button clicked");
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
          Session Expired
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
          Your session has expired. Please login again to continue.
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
            Login Again
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
