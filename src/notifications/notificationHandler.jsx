
import messaging
from "@react-native-firebase/messaging";

export const initializeNotifications =
()=>{

  messaging()
    .onMessage(
      async remoteMessage => {

        console.log(
          remoteMessage
        );

      }
    );
};
