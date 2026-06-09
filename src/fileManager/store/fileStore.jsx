
import { create }
from "zustand";

export const useFileStore =
create(
(set)=>({

  files:[],

  uploads:[],

  setFiles:
  files=>
    set({files}),

  addFile:
  file=>
    set(
      state=>({

        files:[
          ...state.files,
          file
        ]
      })
    ),

  addUpload:
  upload=>
    set(
      state=>({

        uploads:[
          ...state.uploads,
          upload
        ]
      })
    ),
}))
