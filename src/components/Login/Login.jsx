import React from "react";
import bg from "../../assets/banner2.jpg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
   return (
      <div
         className="min-h-screen flex items-center justify-center bg-cover"
         style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: "#0311418e",
            backgroundBlendMode: "overlay",
         }}>
         <div className="bg-[#03114198] h-[100vh] flex flex-col justify-center items-center rounded-lg shadow-lg p-8 w-full space-y-4">
            <h2 className="text-4xl font-semibold text-gray-100  text-center">
               Please Login
            </h2>

            <form className="space-y-6 w-[40%] mx-auto">
               <hr className="mb-2 mx-auto" />
               <div className="">
                  <label
                     className="block text-gray-100 font-bold mb-2"
                     htmlFor="email">
                     Enter your email
                  </label>
                  <input
                     className="appearance-none border rounded py-2 px-3 w-full px-3text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="email"
                     type="email"
                     placeholder="Email address"
                  />
               </div>
               <div>
                  <label
                     className="block text-gray-100 font-bold mb-2"
                     htmlFor="password">
                     Enter Your Password
                  </label>
                  <input
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="password"
                     type="password"
                     placeholder="Password"
                  />
               </div>
               <div>
                  <button
                     type="submit"
                     className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                     Sign in
                  </button>
               </div>
               <div className="flex items-center justify-between">
                  <Link
                     to="/forgot-password"
                     className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-600">
                     Forgot Password?
                  </Link>
                  <Link
                     to="/signup"
                     className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-600">
                     Create an Account
                  </Link>
               </div>
               <div>
                  <hr className="mb-4" />
                  <p className="text-center text-gray-200 font-bold">
                     Or sign in with
                  </p>
                  <div className="flex justify-center">
                     <button
                        type="button"
                        className="bg-white rounded-full border-gray-400 border-2 p-2 mr-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <FaGithub className="text-gray-500" />
                     </button>
                     <button
                        type="button"
                        className="bg-white rounded-full border-gray-400 border-2 p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <FaGoogle className="text-gray-500" />
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
