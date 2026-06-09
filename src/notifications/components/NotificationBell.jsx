
import React from "react";

import NotificationBadge
from "./NotificationBadge";

import {
 useBadge
}
from "../hooks/useBadge";

export default function NotificationBell(){

 const count=
 useBadge();

 return(
  <NotificationBadge
   count={count}
  />
 );
}
