
import { create }
from "zustand";

export const useSidebarStore =
create(
(set)=>({

  collapsed:false,

  mobileOpen:false,

  toggleSidebar:()=>
    set(
      state=>({
        collapsed:
          !state.collapsed
      })
    ),

  openDrawer:()=>
    set({
      mobileOpen:true
    }),

  closeDrawer:()=>
    set({
      mobileOpen:false
    }),
}))
