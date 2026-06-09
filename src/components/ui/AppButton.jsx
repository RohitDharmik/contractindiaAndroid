
import React from "react";

import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

export default function AppButton({

  title,

  loading=false,

  onPress,

}) {

  return (

    <TouchableOpacity
      onPress={onPress}
      style={{
        height:52,
        backgroundColor:"#7C3AED",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:12,
      }}
    >

      {loading ? (

        <ActivityIndicator
          color="#FFF"
        />

      ) : (

        <Text
          style={{
            color:"#FFF",
            fontWeight:"700",
          }}
        >
          {title}
        </Text>

      )}

    </TouchableOpacity>

  );
}
