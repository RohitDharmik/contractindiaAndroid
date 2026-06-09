
import { create }
from "zustand";

export const useRoleStore =
create(
(set)=>({

  role:null,

  permissions:[],

  setRole:
  (role)=>
    set({role}),

  setPermissions:
  (permissions)=>
    set({
      permissions
    }),
}))
