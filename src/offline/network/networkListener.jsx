
import NetInfo
from "@react-native-community/netinfo";

import {
  useOfflineStore
}
from "../store/offlineStore";

export const startNetworkListener =
()=>{

  return NetInfo.addEventListener(
    state=>{

      useOfflineStore
      .getState()
      .setOnline(
        state.isConnected
      );

    }
  );
};
