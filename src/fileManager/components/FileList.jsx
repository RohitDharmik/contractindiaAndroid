
import React from "react";

import {
  FlatList
}
from "react-native";

import FileCard
from "./FileCard";

export default function FileList({

  files=[]

}){

  return(

    <FlatList
      data={files}
      keyExtractor={
        (_,i)=>
          i.toString()
      }
      renderItem={
        ({item})=>(
          <FileCard
            file={item}
          />
        )
      }
    />

  );
}
