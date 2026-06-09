
import {
 useNotificationStore
}
from "../store/notificationStore";

export const useBadge =
()=>{

 return useNotificationStore(
 state=>state.unreadCount
 );

};
