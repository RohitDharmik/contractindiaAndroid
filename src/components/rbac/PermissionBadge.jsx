
import React from "react";

import {
  Text
}
from "react-native";

export default function PermissionBadge({

  permission

}){

  return (
    <Text>
      {permission}
    </Text>
  );
}
