/* eslint-disable @typescript-eslint/no-unused-vars */

import {  createSlice } from '@reduxjs/toolkit';
import {User_Register,User_Login,User_FilesUpload} from "./action"


const ReducerSlice = createSlice({
  name: 'myReducer',
  initialState: {
    Login: false,
    Loading:false,
    message:[],
    Data:[],
    Error:false
  },
  reducers: {
    setLoginTrue:(state,action)=>{
      state.Login=true;
      
    },
    setLoginFalse:(state,action)=>{
      state.Login=false;
      state.Error=true;
    }
  },
  // extraReducers:(builder)=>{
  //   builder
  //       .addCase(User_Register.pending,(state,action)=>{
  //         state.Loading=true;


  //       })
  //       .addCase(User_Register.fulfilled,(state,action)=>{
  //         console.log(action);
  //         state.Loading=false;
  //         state.message=action.payload;

  //       })
  //       .addCase(User_Register.rejected,(state,action)=>{
  //         state.Loading=false;
  //         state.Error=true;
          

  //       })
  //       .addCase(User_Login.pending,(state,action)=>{
  //         state.Loading=true;
          

  //       })
  //       .addCase(User_Login.fulfilled,(state,action)=>{
  //         console.log(action);
  //         state.Loading=false;
  //         state.Login=true;
          
  //       })
  //       .addCase(User_Login.rejected,(state)=>{
  //         state.Loading=false;
  //         state.Login=false;
          
  //       })
  //       .addCase(User_FilesUpload.pending,(state,action)=>{
  //         state.Loading=false;
  //         state.Data=action.payload || [];
  //       })
  //       .addCase(User_FilesUpload.fulfilled,(state,action)=>{

  //       })
  //       .addCase(User_FilesUpload.rejected,(state,action)=>{})
  // }
});
export const { setLoginTrue, setLoginFalse } = ReducerSlice.actions;
export default ReducerSlice.reducer


