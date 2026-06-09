
import React from "react";
import { View } from "react-native";

export default function SectionCard({

 children

}){

 return(
  <View
   style={{
    padding:16,
    borderRadius:12
   }}
  >
   {children}
  </View>
 );
}
