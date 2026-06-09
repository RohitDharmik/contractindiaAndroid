
import React from "react";

import {
  View,
} from "react-native";

export default function AppCard({
  children,
}) {

  return (

    <View
      style={{
        backgroundColor:"#FFF",
        borderRadius:16,
        padding:16,
      }}
    >
      {children}
    </View>

  );
}
