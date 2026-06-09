
import React from "react";

import {
 FlatList
}
from "react-native";

import NotificationCard
from "./NotificationCard";

import {
 useNotifications
}
from "../hooks/useNotifications";

export default function NotificationCenter(){

 const {
  notifications
 }=
 useNotifications();

 return(

  <FlatList
   data={notifications}
   renderItem={
    ({item})=>(
     <NotificationCard
      item={item}
     />
    )
   }
  />

 );

}
