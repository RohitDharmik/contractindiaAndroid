
import React from "react";

import {
  TextInput
}
from "react-native";

export default function SearchBar({

  value,

  onChangeText,

}){

  return (

    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Search"
      style={{
        borderWidth:1,
        borderColor:"#CBD5E1",
        borderRadius:12,
        height:50,
        paddingHorizontal:12,
      }}
    />

  );
}
