
import messaging
from "@react-native-firebase/messaging";

export const subscribeTopic =
async (
 topic
)=>{

 await messaging()
 .subscribeToTopic(
  topic
 );

};

export const unsubscribeTopic =
async (
 topic
)=>{

 await messaging()
 .unsubscribeFromTopic(
  topic
 );

};
