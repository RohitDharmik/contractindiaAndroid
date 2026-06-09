
import React from "react";

import {
  View,
  Text,
} from "react-native";

export default function EmptyState({

  title="No Data Found"

}) {

  return (

    <View
      style={{
        justifyContent:"center",
        alignItems:"center",
      }}
    >

      <Text>
        {title}
      </Text>

    </View>

  );
}
