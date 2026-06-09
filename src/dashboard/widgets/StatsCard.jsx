
import React from "react";

import {
  View,
  Text
}
from "react-native";

export default function StatsCard({

  title,

  value

}){

  return(

    <View
      style={{
        padding:16,
        borderRadius:12,
      }}
    >

      <Text>
        {title}
      </Text>

      <Text>
        {value}
      </Text>

    </View>

  );
}
