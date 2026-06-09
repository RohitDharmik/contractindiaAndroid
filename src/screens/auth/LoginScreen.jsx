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

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          marginBottom: 30,
          color: "#0F172A",
        }}
      >
        Login
      </Text>

      {/* Email */}
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email Address is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text
              style={{
                marginBottom: 6,
                fontWeight: "600",
                color: "#334155",
              }}
            >
              Email Address
            </Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                borderWidth: 1,
                borderColor: "#CBD5E1",
                borderRadius: 12,
                height: 50,
                paddingHorizontal: 14,
                marginBottom: 8,
              }}
            />

            {errors.email && (
              <Text
                style={{
                  color: "#DC2626",
                  marginBottom: 12,
                }}
              >
                {errors.email.message}
              </Text>
            )}
          </View>
        )}
      />

      {/* Password */}
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Minimum 6 characters required",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text
              style={{
                marginBottom: 6,
                fontWeight: "600",
                color: "#334155",
              }}
            >
              Password
            </Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Password"
              secureTextEntry
              style={{
                borderWidth: 1,
                borderColor: "#CBD5E1",
                borderRadius: 12,
                height: 50,
                paddingHorizontal: 14,
                marginBottom: 8,
              }}
            />

            {errors.password && (
              <Text
                style={{
                  color: "#DC2626",
                  marginBottom: 12,
                }}
              >
                {errors.password.message}
              </Text>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={{
          height: 52,
          borderRadius: 12,
          backgroundColor: "#7C3AED",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}