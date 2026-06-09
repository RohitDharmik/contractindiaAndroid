
export const buildNotification=
(
 title,
 message
)=>({

 id:Date.now(),

 title,

 message,

 createdAt:
 new Date(),

});
