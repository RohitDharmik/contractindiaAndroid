
import {
  launchImageLibrary
}
from "react-native-image-picker";

export const pickImage =
()=>{

  return new Promise(
    resolve=>{

      launchImageLibrary(
      {
        mediaType:"photo"
      },
      response=>{

        resolve(response);

      });

    });
};
