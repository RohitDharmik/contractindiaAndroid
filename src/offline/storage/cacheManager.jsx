
import {
 setItem,
 getItem
}
from "./mmkvStorage";

export const saveCache =
(
 key,
 value
)=>{

 setItem(
   key,
   value
 );

};

export const getCache =
(
 key
)=>{

 return getItem(
   key
 );

};
