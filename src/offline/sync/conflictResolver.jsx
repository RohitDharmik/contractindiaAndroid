
export const resolveConflict =
(
 localData,
 serverData
)=>{

 return {

  ...serverData,

  ...localData

 };

};
