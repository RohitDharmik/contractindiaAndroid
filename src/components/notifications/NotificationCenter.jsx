
import React from "react";

import {
  FlatList,
  Text
}
from "react-native";

export default function NotificationCenter({

  data=[]

}){

  return (

    <FlatList
      data={data}
      renderItem={({item})=>(
        <Text>
          {item.title}
        </Text>
      )}
    />

  );
}
