
import { socket }
from "./socketClient";

import {
  SOCKET_EVENTS
}
from "./socketEvents";

export const userOnline =
(callback)=>{

  socket.on(
    SOCKET_EVENTS.USER_ONLINE,
    callback
  );
};

export const userOffline =
(callback)=>{

  socket.on(
    SOCKET_EVENTS.USER_OFFLINE,
    callback
  );
};
