
import {
  useQuery
}
from "@tanstack/react-query";

export const useDashboard =
(queryFn) => {

  return useQuery({

    queryKey:[
      "dashboard"
    ],

    queryFn,
  });
};
