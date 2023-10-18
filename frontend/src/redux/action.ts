/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormUpload, LoginRequest, RegisterRequest } from "./action.type";
import axios from "axios";
import Cookies from "js-cookie";
import { setLoginTrue } from "./Reducer";

export const User_Register = (credential:any)=>async(dispatch:any)=>{
    const registertrial = await axios.post('http:localhost:8080/user/register',credential);
    return registertrial.data;


}

export const User_Login = (credential:any)=>async(dispatch:any)=>{
    const logintrial = await axios.post('http:localhost:8080/user/login',credential)
    const data =  logintrial.data;
    const token = data.token;
    if(data.message=="Login Successful"){
        dispatch(setLoginTrue)
    }
    console.log(data,token,'action.js')
    Cookies.set("jwt",token,{ expires: 7 })
    return data


}

export const User_FilesUpload = createAsyncThunk(FormUpload,async(filesData)=>{
    const jwtToken = Cookies.get('jwt');
    const headers = {
        'Authorization': `Bearer ${jwtToken}`
      };
      const files = await axios.post('http:localhost:8080/form',filesData,{
        headers: headers,
      });
      console.log('actionjs file',files);
      return  files.data


})