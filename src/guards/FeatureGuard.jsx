
import React from "react";

import {
  useFeatureFlag
}
from "../hooks/useFeatureFlag";

export default function FeatureGuard({

  flag,

  children

}){

  const enabled =
    useFeatureFlag(flag);

  if(!enabled){
    return null;
  }

  return children;
}
