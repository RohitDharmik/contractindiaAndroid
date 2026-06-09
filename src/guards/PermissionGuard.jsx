
import React from "react";

import {
  usePermission
}
from "../hooks/usePermission";

export default function PermissionGuard({

  permission,

  children,

}){

  const allowed =
    usePermission(
      permission
    );

  if(!allowed){
    return null;
  }

  return children;
}
