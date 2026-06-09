import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  useForm,
  Controller,
} from "react-hook-form";

export default function ResetPasswordScreen() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ResetPasswordScreen", data);
  };

  return (
    <ScrollView
      contentContainerStyle={
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#FFFFFF",
      }
    >
      <Text
        style={
          fontSize: 30,
          fontWeight: "700",
          marginBottom: 30,
          color: "#0F172A",
        }
      >
        Reset Password
      </Text>


      <Controller
        control={control}
        name="password"
        rules={
          required: "New Password is required",
        }
        render={({ field: { onChange, value } }) => (
          <>
            <Text
              style={
                marginBottom: 6,
                fontWeight: "600",
                color: "#334155",
              }
            >
              New Password
            </Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="New Password"
              secureTextEntry={
                ["password", "confirmPassword"].includes("password")
              }
              style={
                borderWidth: 1,
                borderColor: "#CBD5E1",
                borderRadius: 12,
                height: 50,
                paddingHorizontal: 14,
                marginBottom: 8,
              }
            />

            {errors.password && (
              <Text
                style={
                  color: "#DC2626",
                  marginBottom: 12,
                }
              >
                {errors.password.message}
              </Text>
            )}
          </>
        )}
      />


      <Controller
        control={control}
        name="confirmPassword"
        rules={
          required: "Confirm Password is required",
        }
        render={({ field: { onChange, value } }) => (
          <>
            <Text
              style={
                marginBottom: 6,
                fontWeight: "600",
                color: "#334155",
              }
            >
              Confirm Password
            </Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Confirm Password"
              secureTextEntry={
                ["password", "confirmPassword"].includes("confirmPassword")
              }
              style={
                borderWidth: 1,
                borderColor: "#CBD5E1",
                borderRadius: 12,
                height: 50,
                paddingHorizontal: 14,
                marginBottom: 8,
              }
            />

            {errors.confirmPassword && (
              <Text
                style={
                  color: "#DC2626",
                  marginBottom: 12,
                }
              >
                {errors.confirmPassword.message}
              </Text>
            )}
          </>
        )}
      />


      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={
          height: 52,
          borderRadius: 12,
          backgroundColor: "#7C3AED",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }
      >
        <Text
          style={
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: 16,
          }
        >
          Update Password
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
