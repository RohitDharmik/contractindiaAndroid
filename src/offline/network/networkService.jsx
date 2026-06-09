
import NetInfo
from "@react-native-community/netinfo";

export const getNetworkStatus =
async ()=>{

  const state =
    await NetInfo.fetch();

  return state.isConnected;
};
