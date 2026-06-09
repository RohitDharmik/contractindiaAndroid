
import React from "react";

import {
  FlatList,
  Text
}
from "react-native";

export default function DataTable({

  data=[]

}){

  return (

    <FlatList
      data={data}
      keyExtractor={(_,i)=>
        i.toString()
      }
      renderItem={({item})=>(
        <Text>
          {JSON.stringify(item)}
        </Text>
      )}
    />

  );
}
