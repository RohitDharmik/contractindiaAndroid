
import React from "react";

import PermissionGuard
from "../../guards/PermissionGuard";

export default function Protected({

  permission,

  children

}){

  return (

    <PermissionGuard
      permission={permission}
    >
      {children}
    </PermissionGuard>

  );
}
