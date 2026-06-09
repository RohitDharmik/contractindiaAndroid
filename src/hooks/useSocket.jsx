
import {
  useEffect
}
from "react";

import {
  socket
}
from "../realtime/socketClient";

export const useSocket =
()=>{

  useEffect(()=>{

    socket.connect();

    return ()=>{

      socket.disconnect();

    };

  },[]);
};
