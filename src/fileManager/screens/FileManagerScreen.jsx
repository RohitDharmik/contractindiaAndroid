
import React from "react";

import {
  View
}
from "react-native";

import FileUploadButton
from "../components/FileUploadButton";

export default function FileManagerScreen(){

  return(

    <View
      style={{
        flex:1,
        padding:16
      }}
    >

      <FileUploadButton />

    </View>

  );
}
