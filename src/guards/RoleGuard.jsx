
import React from "react";

import {
  useRoleStore
}
from "../store/roleStore";

export default function RoleGuard({

  roles=[],

  children,

}){

  const role =
    useRoleStore(
      state=>state.role
    );

  if(
    !roles.includes(role)
  ){
    return null;
  }

  return children;
}
