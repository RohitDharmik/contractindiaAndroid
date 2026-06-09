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

export default function OtpScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data) => {
    console.log("OTP Data:", data);
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
        OTP Verification
      </Text>

      <Controller
        control={control}
        name="otp"
        rules={{
          required: "OTP is required",
          minLength: {
            value: 6,
            message: "OTP must be 6 digits",
          },
          maxLength: {
            value: 6,
            message: "OTP must be 6 digits",
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
              Enter OTP
            </Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter OTP"
              keyboardType="number-pad"
              maxLength={6}
              style={{
                borderWidth: 1,
                borderColor: "#CBD5E1",
                borderRadius: 12,
                height: 50,
                paddingHorizontal: 14,
                marginBottom: 8,
              }}
            />

            {errors.otp && (
              <Text
                style={{
                  color: "#DC2626",
                  marginBottom: 12,
                }}
              >
                {errors.otp.message}
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
          Verify OTP
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}