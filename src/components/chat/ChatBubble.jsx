
import React from "react";

import {
  View,
  Text
}
from "react-native";

export default function ChatBubble({

  message

}){

  return (

    <View>

      <Text>
        {message}
      </Text>

    </View>

  );
}
