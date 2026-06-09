
import {
  FEATURE_FLAGS
}
from "../rbac/featureFlags";

export const useFeatureFlag =
(flag)=>{

  return !!FEATURE_FLAGS[
    flag
  ];

};
