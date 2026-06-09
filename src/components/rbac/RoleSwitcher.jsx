
import React from "react";

import {
  View,
  Button
}
from "react-native";

import {
  useRoleStore
}
from "../../store/roleStore";

export default function RoleSwitcher(){

  const setRole =
    useRoleStore(
      state=>state.setRole
    );

  return (

    <View>

      <Button
        title="Admin"
        onPress={()=>
          setRole("ADMIN")
        }
      />

      <Button
        title="Manager"
        onPress={()=>
          setRole("MANAGER")
        }
      />

    </View>

  );
}
