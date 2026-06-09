
import messaging
from "@react-native-firebase/messaging";

export const requestNotificationPermission =
async ()=>{

  return await messaging()
    .requestPermission();
};
