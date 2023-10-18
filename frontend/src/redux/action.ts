/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FormUpload,
  FormFailed,
  LoginFailure,
  LoginRequest,
  RegisterFailure,
  RegisterRequest,
} from "./action.type";
import axios from "axios";
import Cookies from "js-cookie";

export const User_Register = (credential: any) => async (dispatch: any) => {
  console.log(credential);
  try {
    const registertrial = await axios.post(
      "http://localhost:8080/user/register",
      credential
    );
    if (registertrial.data.message) {
      dispatch({ type: RegisterRequest });
    }
  } catch (e) {
    dispatch({ type: RegisterFailure });
  }
};

export const User_Login = (credential: any) => async (dispatch: any) => {
  console.log(credential);
  try {
    const logintrial = await axios.post(
      "http://localhost:8080/user/login",
      credential
    );
    const data = logintrial.data;
    console.log(logintrial);
    if (data.message == "Login Successful") {
      dispatch({ type: LoginRequest, payload: data.token });
    }
  } catch (e) {
    console.log("hell");
    dispatch({ type: LoginFailure });
  }
};

// export const User_FilesUpload = createAsyncThunk(
//   FormUpload,

//   async (filesData) => {
//     const jwtToken = Cookies.get("jwt");
//     const headers = {
//     "Content-Type": 'multipart/form-data',
//       Authorization: `Bearer ${jwtToken}`,
//     };
//     const files = await axios.post("http:localhost:8080/form", filesData, {
//       headers: headers,
//     });
//     console.log("actionjs file", files);
//     return files.data;
//   }
// );
export const FormUploadTrial = (filesData: any) => async (dispatch: any) => {
  const formData = new FormData();
  formData.append("name", filesData.name); // Assuming 'name' is the name input field value
  formData.append("email", filesData.email); // Assuming 'email' is the email input field value
  formData.append("mobile", filesData.phone);
  const filesdata = filesData.files;
  filesdata.forEach((file: any, index: number) => {
    formData.append(`files[${index}]`, file);
  });

  try {
    const jwtToken = Cookies.get("jwt");
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${jwtToken}`,
    };
    const files = await axios.post("http://localhost:8080/form", formData, {
      headers: headers,
    });
    console.log(files);
    if (files.data.message) {
      dispatch({ type: FormUpload, payload: files.data });
    }
  } catch (e) {
    dispatch({ type: FormFailed });
  }
};
