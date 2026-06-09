
import {
 useOfflineStore
}
from "../store/offlineStore";

export const useSync =
()=>{

 return useOfflineStore(
  state=>({

   syncing:
    state.syncing,

   lastSync:
    state.lastSync

  })
 );

};
