
import React from "react";

import {
  View,
  Text
}
from "react-native";

export default function NotificationBadge({

  count=0

}){

  return (

    <View>

      <Text>
        {count}
      </Text>

    </View>

  );
}
