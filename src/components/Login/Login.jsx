import React, { useContext, useState } from "react";
import bg from "../../assets/banner2.jpg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import TypewriterComponent from "typewriter-effect";
import Typewriter from "typewriter-effect";

const Login = () => {
   const { loginUser, googleLogin } = useContext(AuthContext);
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");
   const navigate = useNavigate();
   const location = useLocation();
   console.log(location);
   const from = location.state?.from?.pathname || "/";

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      loginUser(email, password)
         .then((result) => {
            const loggedUser = result.user;
            setError("");
            setSuccess("Login successful");
            form.reset();
            console.log(loggedUser);
            navigate(from, { replace: true });
         })
         .catch((error) => {
            setSuccess("");
            setError(error.message);
            console.log(error.message);
         });

      console.log(email, password);
   };

   const loginWiteGoogle = () => {
      googleLogin()
         .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <div
         className="min-h-screen relative flex items-center justify-center bg-cover"
         style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: "#0311418e",
            backgroundBlendMode: "overlay",
         }}>
         <div className=" absolute inset-0 bg-[#000000b2]"></div>
         <div className="absolute flex flex-col justify-center items-center rounded-lg shadow-lg p-8 w-full space-y-4">
            <h2 className="text-4xl font-semibold text-gray-100  text-center">
               <Typewriter
                  options={{
                     strings: ["Please login"],
                     autoStart: true,
                     loop: true,
                     delay: 80,
                     cursor: "_",
                     deleteSpeed: 20,
                  }}
               />
            </h2>

            <form onSubmit={handleLogin} className="space-y-6 w-[40%] mx-auto">
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
                     name="email"
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
                     name="password"
                     placeholder="Password"
                  />
               </div>
               <div className="my-0 py-0 m-0 p-0">
                  {error ? (
                     <p className="text-red-500 m-0 p-0">{error}</p>
                  ) : (
                     <p className="text-green-600 m-0 p-0">{success}</p>
                  )}
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
                        onClick={googleLogin}
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
