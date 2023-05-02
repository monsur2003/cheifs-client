import React, { useContext } from "react";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import { Result } from "postcss";

const Login = () => {
   const { googleLogin } = useContext(AuthContext);

   const handleGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            const loggedUser = result.user;
         })
         .catch((err) => {
            console.log(err.message);
         });
   };
   return (
      <>
         <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="bg-white rounded-md shadow-md p-8 max-w-md w-full">
               <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
               <form className="space-y-6">
                  <div>
                     <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="email">
                        Email
                     </label>
                     <input
                        id="email"
                        type="email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                     />
                  </div>
                  <div>
                     <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="password">
                        Password
                     </label>
                     <input
                        id="password"
                        type="password"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                     />
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Log In
                     </button>
                  </div>
               </form>
               <p className="text-gray-700 text-center mt-8 mb-4">
                  Or log in with:
               </p>
               <div className="flex flex-row space-x-4 justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full flex items-center justify-center">
                     <FaGithub className="mr-2" />
                     GitHub
                  </button>
                  <button
                     onClick={handleGoogleLogin}
                     className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full flex items-center justify-center">
                     <FaGoogle className="mr-2" />
                     Google
                  </button>
               </div>
               <p className="text-gray-700 text-center mt-8">
                  If you are new to this website,
                  <Link to="/register"> please sign up.</Link>
               </p>
            </div>
         </div>
      </>
   );
};

export default Login;
