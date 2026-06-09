
import {
  useDashboardStore
}
from "../store/dashboardStore";

export const useWidgets =
()=>{

  return useDashboardStore(
    state=>state.widgets
  );

};
