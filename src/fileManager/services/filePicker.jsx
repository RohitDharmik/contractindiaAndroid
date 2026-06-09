
import DocumentPicker
from "react-native-document-picker";

export const pickDocument =
async ()=>{

  try{

    const result =
      await DocumentPicker.pick();

    return result;

  }catch(error){

    return null;

  }
};
