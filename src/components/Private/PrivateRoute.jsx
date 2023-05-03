import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import "./Private.css";

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   console.log(location);
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return (
         <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <span class="loader"></span>;
         </div>
      );
   }
   if (user) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
