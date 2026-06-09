
import AsyncStorage
from "@react-native-async-storage/async-storage";

export const saveNotifications =
async (
 notifications
)=>{

 await AsyncStorage.setItem(
  "notifications",
  JSON.stringify(
   notifications
  )
 );

};

export const loadNotifications =
async ()=>{

 const value=
 await AsyncStorage.getItem(
  "notifications"
 );

 return value
 ? JSON.parse(value)
 : [];

};
