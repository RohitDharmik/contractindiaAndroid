
export const invalidateKeys =
(queryClient,key)=>{

  queryClient.invalidateQueries({
    queryKey:key
  });
};
