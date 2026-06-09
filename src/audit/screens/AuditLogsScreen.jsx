
import React from "react";

import {
 View,
 Text,
 FlatList
} from "react-native";

export default function AuditLogsScreen(){

 const data=[];

 return(
  <View style={{flex:1,padding:20}}>

   <FlatList
    data={data}
    keyExtractor={(_,i)=>i.toString()}
    renderItem={({item})=>(
     <Text>{item.action}</Text>
    )}
   />

  </View>
 );
}
