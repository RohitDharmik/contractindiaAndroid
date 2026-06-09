
import React from "react";

import {
  View
}
from "react-native";

import DashboardHeader
from "./DashboardHeader";

import DashboardContent
from "./DashboardContent";

export default function DashboardLayout({

  children

}){

  return(

    <View
      style={{
        flex:1
      }}
    >

      <DashboardHeader />

      <DashboardContent>
        {children}
      </DashboardContent>

    </View>

  );
}
