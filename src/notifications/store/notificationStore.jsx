
import { create } from "zustand";

export const useNotificationStore =
create((set)=>({

 notifications:[],

 unreadCount:0,

 inbox:[],

 addNotification:(item)=>
 set(state=>({

  notifications:[
   item,
   ...state.notifications
  ],

  unreadCount:
   state.unreadCount+1

 })),

 markAllRead:()=>
 set({
  unreadCount:0
 }),

 setInbox:(inbox)=>
 set({inbox}),

}));