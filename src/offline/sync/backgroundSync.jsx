
import {
 processQueue
}
from "../queue/queueProcessor";

export const runBackgroundSync =
async ()=>{

 await processQueue();

};
