
import React from "react";

import {
 FlatList,
 Text
}
from "react-native";

import {
 useInbox
}
from "../hooks/useInbox";

export default function InboxList(){

 const inbox=
 useInbox();

 return(

  <FlatList
   data={inbox}
   renderItem={
    ({item})=>
    <Text>
     {item.title}
    </Text>
   }
  />

 );

}
