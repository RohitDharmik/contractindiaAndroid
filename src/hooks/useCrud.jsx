
import {
  useMutation
}
from "@tanstack/react-query";

export const useCrud =
(mutationFn)=>{

  return useMutation({

    mutationFn,
  });
};
