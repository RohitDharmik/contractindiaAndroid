
import React from "react";

import {
  Modal,
  View
}
from "react-native";

export default function DashboardDrawer({

  visible

}){

  return(

    <Modal
      visible={visible}
    >

      <View
        style={{
          flex:1
        }}
      />

    </Modal>

  );
}
