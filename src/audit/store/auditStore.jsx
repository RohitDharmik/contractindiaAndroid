
import { create } from "zustand";

export const useAuditStore = create((set)=>({

 logs:[],

 setLogs:(logs)=>set({logs}),

 addLog:(log)=>
 set((state)=>({
  logs:[log,...state.logs]
 })),

}));
