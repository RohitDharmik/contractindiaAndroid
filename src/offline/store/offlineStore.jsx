
import { create } from "zustand";

export const useOfflineStore =
create((set)=>({

  isOnline:true,

  pendingRequests:[],

  syncing:false,

  lastSync:null,

  setOnline:(status)=>
    set({isOnline:status}),

  addRequest:(request)=>
    set((state)=>({
      pendingRequests:[
        ...state.pendingRequests,
        request
      ]
    })),

  clearRequests:()=>
    set({
      pendingRequests:[]
    }),

  setSyncing:(value)=>
    set({
      syncing:value
    }),

  setLastSync:(date)=>
    set({
      lastSync:date
    }),
}));
