
import {
  hasPermission
}
from "../rbac/permissionService";

import {
  useRoleStore
}
from "../store/roleStore";

export const usePermission =
(permission)=>{

  const role =
    useRoleStore(
      state=>state.role
    );

  return hasPermission(
    role,
    permission
  );
};
