
import { create }
from "zustand";

export const useTenantStore =
create(
(set)=>({

  tenant:null,

  tenants:[],

  setTenant:
  (tenant)=>
    set({tenant}),

  setTenants:
  (tenants)=>
    set({tenants}),
}))
