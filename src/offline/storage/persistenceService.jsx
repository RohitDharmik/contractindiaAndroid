
import {
 saveCache
}
from "./cacheManager";

export const persistData =
(
 key,
 data
)=>{

 saveCache(
  key,
  data
 );

};
