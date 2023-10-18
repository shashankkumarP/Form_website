/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Navigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";



function PrivateRoute({ children }:any) {
 
  const Login = useSelector<any>((state)=>state.myreducer.Login)

  if (!Login) {
    return <Navigate to="/login" />;
  }
  

  return children;
}

export default PrivateRoute;