
import { create }
from "zustand";

export const useDashboardStore =
create(
(set)=>({

  widgets:[],

  notifications:[],

  stats:{},

  setWidgets:
    widgets=>
      set({widgets}),

  setStats:
    stats=>
      set({stats}),
}))
