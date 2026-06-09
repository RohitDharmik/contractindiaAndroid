
import React from "react";

import {
  View,
  Text
}
from "react-native";

export default function FileCard({

  file

}){

  return(

    <View
      style={{
        padding:12,
        marginBottom:8,
        borderWidth:1,
        borderColor:"#ddd",
        borderRadius:10,
      }}
    >

      <Text>
        {file?.name}
      </Text>

    </View>

  );
}
