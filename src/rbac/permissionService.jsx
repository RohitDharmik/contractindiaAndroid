
import {
  ACCESS_MATRIX
}
from "./accessMatrix";

export const hasPermission =
(
 role,
 permission
)=>{

  const permissions =
    ACCESS_MATRIX[role]
    || [];

  if(
    permissions.includes("*")
  ){
    return true;
  }

  return permissions.includes(
    permission
  );
};
