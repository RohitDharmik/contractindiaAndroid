
import React from "react";

import {
 View,
 Text
}
from "react-native";

export default function NotificationCard({

 item

}){

 return(

  <View>

   <Text>
    {item.title}
   </Text>

   <Text>
    {item.message}
   </Text>

  </View>

 );

}
