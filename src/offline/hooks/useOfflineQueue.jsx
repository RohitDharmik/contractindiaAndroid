
import {
 useOfflineStore
}
from "../store/offlineStore";

export const useOfflineQueue =
()=>{

 return useOfflineStore(
  state=>({

   requests:
    state.pendingRequests

  })
 );

};
