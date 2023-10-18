/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";



function PrivateRoute({ children }:any) {
 
 
  const state:any = useSelector<any>((state)=>state.reducer)
 console.log(state)
  if (!state.Login) {
   
  return <Navigate to="/login" />;
  }
  

  return children;
}

export default PrivateRoute;