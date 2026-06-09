
import React from "react";

import {
  Button
}
from "react-native";

export default function FileUploadButton({

  onPress

}){

  return(

    <Button
      title="Upload File"
      onPress={onPress}
    />

  );
}
