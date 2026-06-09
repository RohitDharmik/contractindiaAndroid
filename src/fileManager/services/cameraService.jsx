
import {
  launchCamera
}
from "react-native-image-picker";

export const openCamera =
()=>{

  return new Promise(
    resolve=>{

      launchCamera(
      {
        mediaType:"photo"
      },
      response=>{

        resolve(response);

      });

    });
};
