
import {
  create
}
from "zustand";

export const useDataStore =
create(
(set)=>({

  rows:[],

  setRows:
  (rows)=>
    set({rows}),
}))
