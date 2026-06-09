
import { socket }
from "./socketClient";

import {
  SOCKET_EVENTS
}
from "./socketEvents";

export const emitTyping =
(data)=>{

  socket.emit(
    SOCKET_EVENTS.TYPING,
    data
  );
};

export const emitStopTyping =
(data)=>{

  socket.emit(
    SOCKET_EVENTS.STOP_TYPING,
    data
  );
};
