
import {
  ROLE_MENUS
}
from "./roleMenus";

export const buildMenu =
(role,menus)=>{

  const allowed =
    ROLE_MENUS[role]
    || [];

  return menus.filter(
    item=>
      allowed.includes(
        item.title
      )
  );
};
