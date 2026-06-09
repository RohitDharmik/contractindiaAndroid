
import React from "react";

import {
 View,
 Text
}
from "react-native";

import {
 useSync
}
from "../hooks/useSync";

export default function SyncStatus(){

 const {
  syncing,
  lastSync
 }=
 useSync();

 return(

  <View>

   <Text>
    Sync:
    {
      syncing
      ? "Running"
      : "Idle"
    }
   </Text>

   <Text>
    Last:
    {
      lastSync
      ? String(lastSync)
      : "-"
    }
   </Text>

  </View>

 );
}
