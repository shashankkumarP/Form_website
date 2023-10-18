/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormFailed, FormUpload, LoginFailure, LoginRequest,DisableError, RegisterFailure, RegisterRequest } from './action.type';
import Cookies from "js-cookie";
interface Initialstate{
  Login: boolean;
  Loading:boolean;
  message:[];
  Data:[],
  Error:boolean;
}
const initialState:Initialstate= {
  Login: false,
  Loading:false,
  message:[],
  Data:[],
  Error:false
}

 const MYReducer = (state=initialState,{type,payload}: { type: string,payload:any | never})=>{

  switch(type)
  {
    case LoginRequest:{
      let token = payload
      console.log('here')
      Cookies.set('jwt', token, { expires: 7 });
      
      console.log(state);
      return {
        ...state,Login:true
      }
    }
    case LoginFailure:{
      console.log('fail')
      return {
        ...state,Login:false,
        Error:true
      }
    }
    case RegisterRequest:{
      return {
        ...state,Error:false
      }
    }
    case RegisterFailure:{
      return {
        ...state,Error:true
      }
    }
    case FormUpload:{
      return {
        ...state,Data:[...payload]
      }
    }
    case FormFailed:{
      return {
        ...state,Data:[],Error:true
      }
    }
    case DisableError:{
      return{
        ...state,Error:false
      }
    }
    default:
      return state;
    
  }



 }
 export default MYReducer
