
import React from "react";

import {
  Modal,
  View,
} from "react-native";

export default function AppModal({

  visible,

  children,

}) {

  return (

    <Modal
      visible={visible}
      transparent
    >

      <View
        style={{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
        }}
      >
        {children}
      </View>

    </Modal>

  );
}
