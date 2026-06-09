
import {
 useOfflineStore
}
from "../store/offlineStore";

import {
 processQueue
}
from "../queue/queueProcessor";

export const syncNow =
async ()=>{

 const {
  setSyncing,
  setLastSync
 }=
 useOfflineStore.getState();

 try{

  setSyncing(true);

  await processQueue();

  setLastSync(
   new Date()
  );

 }finally{

  setSyncing(false);

 }

};
