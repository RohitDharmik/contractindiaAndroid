
import { io } from "socket.io-client";

const SOCKET_URL =
"https://api.example.com";

export const socket =
io(
  SOCKET_URL,
  {
    transports:["websocket"],
    autoConnect:false,
  }
);
