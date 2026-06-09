
import React from "react";

import {
 View,
 Text
}
from "react-native";

export default function NotificationBadge({

 count

}){

 return(

  <View>

   <Text>
    {count}
   </Text>

  </View>

 );

}
