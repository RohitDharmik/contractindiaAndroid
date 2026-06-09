
import {
 useOfflineStore
}
from "../store/offlineStore";

export const enqueueRequest =
(
 request
)=>{

 useOfflineStore
 .getState()
 .addRequest(
  request
 );

};
