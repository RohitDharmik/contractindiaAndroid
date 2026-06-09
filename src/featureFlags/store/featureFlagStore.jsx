
import { create } from "zustand";

export const useFeatureFlagStore =
create((set)=>({

 flags:{},

 setFlags:(flags)=>
 set({flags})

}));
