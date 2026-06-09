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

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
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
        Create Account
      </Text>

      {/* Full Name */}
      <Controller
        control={control}
        name="name"
        rules={{
          required: "Full Name is required",
        }}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text style={labelStyle}>Full Name</Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Full Name"
              style={inputStyle}
            />

            {errors.name && (
              <Text style={errorStyle}>
                {errors.name.message}
              </Text>
            )}
          </View>
        )}
      />

      {/* Email */}
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text style={labelStyle}>Email Address</Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              style={inputStyle}
            />

            {errors.email && (
              <Text style={errorStyle}>
                {errors.email.message}
              </Text>
            )}
          </View>
        )}
      />

      {/* Mobile */}
      <Controller
        control={control}
        name="mobile"
        rules={{
          required: "Mobile Number is required",
          minLength: {
            value: 10,
            message: "Enter valid mobile number",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text style={labelStyle}>Mobile Number</Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
              maxLength={10}
              placeholder="Mobile Number"
              style={inputStyle}
            />

            {errors.mobile && (
              <Text style={errorStyle}>
                {errors.mobile.message}
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
            <Text style={labelStyle}>Password</Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Password"
              secureTextEntry
              style={inputStyle}
            />

            {errors.password && (
              <Text style={errorStyle}>
                {errors.password.message}
              </Text>
            )}
          </View>
        )}
      />

      {/* Confirm Password */}
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: "Confirm Password is required",
          validate: (value) =>
            value === password || "Passwords do not match",
        }}
        render={({ field: { onChange, value } }) => (
          <View>
            <Text style={labelStyle}>Confirm Password</Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Confirm Password"
              secureTextEntry
              style={inputStyle}
            />

            {errors.confirmPassword && (
              <Text style={errorStyle}>
                {errors.confirmPassword.message}
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
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "700",
            fontSize: 16,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: "#CBD5E1",
  borderRadius: 12,
  height: 50,
  paddingHorizontal: 14,
  marginBottom: 8,
};

const labelStyle = {
  marginBottom: 6,
  fontWeight: "600",
  color: "#334155",
};

const errorStyle = {
  color: "#DC2626",
  marginBottom: 12,
};