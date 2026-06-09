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

export default function ForgotPasswordScreen() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ForgotPasswordScreen", data);
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
        Forgot Password
      </Text>


      <Controller
        control={control}
        name="email"
        rules={
          required: "Email Address is required",
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
              Email Address
            </Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Email Address"
              secureTextEntry={
                ["password", "confirmPassword"].includes("email")
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

            {errors.email && (
              <Text
                style={
                  color: "#DC2626",
                  marginBottom: 12,
                }
              >
                {errors.email.message}
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
          Send OTP
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
