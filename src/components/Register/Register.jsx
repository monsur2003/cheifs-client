import React, { useContext, useState } from "react";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg from "../../assets/banner2.jpg";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
   const [error, setError] = useState("");
   const { createUser } = useContext(AuthContext);

   const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.pass.value;
      const name = form.name.value;
      const photo = form.photo.value;
      const confirmPassword = form.confirm.value;

      if (/(?=.*[A-Z])/.test(password)) {
         setError("please enter atleast one uppercase letters");
         return;
      } else if (password.length < 6) {
         setError("Password must be at least 6 characters");
         return;
      }
      createUser(email, password)
         .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   return (
      <div
         className="min-h-screen flex items-center justify-center bg-cover"
         style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: "#0311418e",
            backgroundBlendMode: "overlay",
         }}>
         <div className="bg-[#03114198] h-[120vh] flex flex-col justify-center items-center rounded-lg shadow-lg p-8 w-full space-y-4">
            <h2 className="text-4xl font-semibold text-gray-100  text-center">
               Please Login
            </h2>

            <form onSubmit={handleSignUp} className="space-y-3 w-[40%] mx-auto">
               <hr className="mb-2 mx-auto" />
               <div className=" ">
                  <div className="w-full mb-3">
                     <label
                        className="block text-gray-100 font-bold mb-[4px]"
                        htmlFor="email">
                        Enter your full name
                     </label>
                     <input
                        className="appearance-none border rounded py-2 px-3 w-full px-3text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                     />
                  </div>
                  <div className="w-full">
                     <label
                        className="block text-gray-100 font-bold mb-[4px]"
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
               </div>
               <div className="">
                  <label
                     className="block text-gray-100 font-bold mb-[4px]"
                     htmlFor="">
                     drop your photoURL
                  </label>
                  <input
                     className="appearance-none border rounded py-2 px-3 w-full px-3text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="photo"
                     name="photo"
                     type="text"
                     placeholder="Drop your photo URL"
                  />
               </div>
               <div className="flex justify-between items-center space-x-2">
                  <div className="w-full">
                     <label
                        className="block text-gray-100 font-bold mb-[4px]"
                        htmlFor="password">
                        Enter Your Password
                     </label>
                     <input
                        className="appearance-none border rounded rounded-r-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        name="pass"
                        type="password"
                        placeholder="Password"
                     />
                  </div>
                  <div className="w-full">
                     <label
                        className="block text-gray-100 font-bold mb-[4px]"
                        htmlFor="password">
                        Confirm password
                     </label>
                     <input
                        className="appearance-none border rounded-l-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="confirm"
                        placeholder="Password"
                     />
                  </div>
               </div>
               <p className="text-red-500">{error}</p>
               <div className="">
                  <button
                     type="submit"
                     className="w-full mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                     Register
                  </button>
               </div>
               <div className="flex items-center justify-between">
                  <p className="inline-block align-baseline ">
                     <small className="text-gray-200">
                        Already have an account?
                     </small>{" "}
                     <Link
                        className="font-bold text-sm text-blue-400 hover:text-blue-600"
                        to="/login">
                        Login
                     </Link>
                  </p>
               </div>
               <div>
                  <hr className="mb-1" />
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

export default Register;
