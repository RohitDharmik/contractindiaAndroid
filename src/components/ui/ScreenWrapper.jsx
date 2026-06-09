
import React from "react";

import {
  SafeAreaView,
} from "react-native";

export default function ScreenWrapper({

  children,

}) {

  return (

    <SafeAreaView
      style={{
        flex:1,
        padding:16,
      }}
    >
      {children}
    </SafeAreaView>

  );
}
