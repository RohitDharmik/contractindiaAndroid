
import { socket }
from "./socketClient";

import {
  SOCKET_EVENTS
}
from "./socketEvents";

export const sendMessage =
(payload)=>{

  socket.emit(
    SOCKET_EVENTS.SEND_MESSAGE,
    payload
  );
};

export const listenMessages =
(callback)=>{

  socket.on(
    SOCKET_EVENTS.MESSAGE,
    callback
  );
};
