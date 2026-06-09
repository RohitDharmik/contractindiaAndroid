
import React from "react";

import {
  useTenantStore
}
from "../store/tenantStore";

export default function TenantGuard({

  children

}){

  const tenant =
    useTenantStore(
      state=>state.tenant
    );

  if(!tenant){
    return null;
  }

  return children;
}
