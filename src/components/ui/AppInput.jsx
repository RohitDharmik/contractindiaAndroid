
import React from "react";

import {
  View,
  Text,
  TextInput,
} from "react-native";

export default function AppInput({

  label,

  error,

  ...props

}) {

  return (

    <View>

      {label && (
        <Text>
          {label}
        </Text>
      )}

      <TextInput
        {...props}
        style={{
          borderWidth:1,
          borderColor:"#CBD5E1",
          borderRadius:12,
          height:50,
          paddingHorizontal:12,
        }}
      />

      {error && (
        <Text
          style={{
            color:"red"
          }}
        >
          {error}
        </Text>
      )}

    </View>

  );
}
