
import {
 useOfflineStore
}
from "../store/offlineStore";

export const useNetwork =
()=>{

 return useOfflineStore(
  state=>({

   isOnline:
    state.isOnline

  })
 );

};
