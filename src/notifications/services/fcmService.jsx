
import messaging
from "@react-native-firebase/messaging";

export const requestPermission =
async ()=>{

 const authStatus =
 await messaging()
 .requestPermission();

 return authStatus;

};

export const getFCMToken =
async ()=>{

 const token =
 await messaging()
 .getToken();

 return token;

};

export const subscribeForeground =
(callback)=>{

 return messaging()
 .onMessage(callback);

};
