
import {
  useInfiniteQuery
}
from "@tanstack/react-query";

export const useInfiniteScroll =
(config)=>{

  return useInfiniteQuery(
    config
  );
};
