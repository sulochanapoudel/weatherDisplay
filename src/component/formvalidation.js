import * as Yup from 'yup';


export const schema = Yup.object().shape({
  placeName: Yup.string().min(3, "Too Short").max(20, "Too long").required("REQUIRED"), 
  

});