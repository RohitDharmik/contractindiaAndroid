
import React from "react";

export default function AuthGuard({

  isAuthenticated,

  children

}){

  if(
    !isAuthenticated
  ){
    return null;
  }

  return children;
}
