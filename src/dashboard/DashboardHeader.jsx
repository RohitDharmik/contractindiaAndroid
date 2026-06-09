
import React from "react";

import {
  View,
  Text,
  TouchableOpacity
}
from "react-native";

export default function DashboardHeader({

  title="Dashboard",

  onMenuPress,

}){

  return(

    <View
      style={{
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:16,
      }}
    >

      <TouchableOpacity
        onPress={onMenuPress}
      >
        <Text>
          ☰
        </Text>
      </TouchableOpacity>

      <Text>
        {title}
      </Text>

      <Text>
        🔔
      </Text>

    </View>

  );
}
