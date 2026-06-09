
import React from "react";

import {
 View,
 Text
}
from "react-native";

import {
 useOfflineQueue
}
from "../hooks/useOfflineQueue";

export default function PendingActions(){

 const {
  requests
 }=
 useOfflineQueue();

 return(

  <View>

   <Text>
    Pending:
    {requests.length}
   </Text>

  </View>

 );
}
