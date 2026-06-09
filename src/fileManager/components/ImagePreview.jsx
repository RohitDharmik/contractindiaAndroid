
import React from "react";

import {
  Image
}
from "react-native";

export default function ImagePreview({

  uri

}){

  return(

    <Image
      source={{
        uri
      }}
      style={{
        width:120,
        height:120
      }}
    />

  );
}
