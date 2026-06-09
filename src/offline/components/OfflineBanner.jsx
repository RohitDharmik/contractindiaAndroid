
import React from "react";

import {
 View,
 Text
}
from "react-native";

import {
 useNetwork
}
from "../hooks/useNetwork";

export default function OfflineBanner(){

 const {
  isOnline
 }=
 useNetwork();

 if(isOnline){
  return null;
 }

 return(

  <View
   style={{
    padding:10,
    backgroundColor:"red"
   }}
  >
   <Text
    style={{
      color:"#fff"
    }}
   >
    Offline Mode
   </Text>
  </View>

 );
}
