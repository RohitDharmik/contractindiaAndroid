
import React from "react";
import {
  View,
  Text,
} from "react-native";

export default function UsersScreen() {

  return (

    <View
      style={
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }
    >

      <Text
        style={
          fontSize:24,
          fontWeight:"700"
        }
      >
        Users Screen
      </Text>

    </View>

  );
}
