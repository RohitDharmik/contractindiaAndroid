
import {
 useNotificationStore
}
from "../store/notificationStore";

export const useInbox =
()=>{

 return useNotificationStore(
 state=>state.inbox
 );

};
