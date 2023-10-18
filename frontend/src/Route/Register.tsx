/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {User_Register} from "../redux/action"
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const state:any = useSelector<any>((state)=>state.reducer)
  const dispatch  = useDispatch();
  const navigate = useNavigate();
    const [form,setForm] = useState({
        Name:"",
        Email:"",
        Password:""

    });

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form);
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    

   if(!emailRegex.test(form.Email)){
    alert("Invalid Email");
    return;
   }else{
    dispatch(User_Register(form) as any).then((res:any)=>{
      if(state.Error) alert('registration failed')
      else {

        alert('resgistration successfull');
        navigate('/login')
      }
    })
  }
  };

  return (
    <div className="min-h-max mt-40 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Register</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e)=>handleRegistration(e)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label  className="sr-only">
                Name
              </label>
              <input
               
                name="name"
                type="text"
                required
                value={form.Name}
                onChange={(e) => setForm({...form,Name:e.target.value})}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="sr-only">
                Email
              </label>
              <input
               
                name="email"
                type="email"
                required
                value={form.Email}
                onChange={(e) => setForm({...form,Email:e.target.value})}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label  className="sr-only">
                Password
              </label>
              <input
              
                name="password"
                type="password"
                required
                value={form.Password}
                onChange={(e) => setForm({...form,Password:e.target.value})}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
