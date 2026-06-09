
import React from "react";

import {
  View,
  TextInput
}
from "react-native";

export default function ChatInput({

  value,

  onChangeText

}){

  return (

    <View>

      <TextInput
        value={value}
        onChangeText={
          onChangeText
        }
      />

    </View>

  );
}
