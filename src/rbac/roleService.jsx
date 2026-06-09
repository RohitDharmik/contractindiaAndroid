
import {
  ACCESS_MATRIX
}
from "./accessMatrix";

export const getRolePermissions =
(role)=>{

  return (
    ACCESS_MATRIX[role]
    || []
  );

};
