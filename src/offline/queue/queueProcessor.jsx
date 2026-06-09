
import {
 useOfflineStore
}
from "../store/offlineStore";

export const processQueue =
async ()=>{

 const {
  pendingRequests,
  clearRequests
 }=
 useOfflineStore.getState();

 for(
  const req
  of pendingRequests
 ){

  try{

   await req();

  }catch(error){

   console.log(error);

  }

 }

 clearRequests();

};
