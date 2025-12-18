import { Navigate } from "react-router-dom";

export const Productauth=({ children })=>{

  const User = localStorage.getItem("auth",false);

  if (User === false) 
    return <Navigate to="/login" replace />;

  return children;
}