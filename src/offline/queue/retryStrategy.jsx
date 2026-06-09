
export const retryRequest =
async (

 callback,

 retries=3

)=>{

 for(
  let i=0;
  i<retries;
  i++
 ){

  try{

   return await callback();

  }catch(error){

   console.log(
    "Retry:",
    i+1
   );

  }
 }

 throw new Error(
  "Max retries exceeded"
 );

};
