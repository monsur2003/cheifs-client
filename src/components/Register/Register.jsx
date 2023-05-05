import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../assets/banner2.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Typewriter from "typewriter-effect";
const Register = () => {
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");
   const [control, setControl] = useState(false);
   const { createUser, googleLogin, githubLogin } = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";
   console.log(location);

   const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.passwordd.value;
      const name = form.name.value;
      const photo = form.photo.value;
      const confirmPassword = form.confirm.value;
      console.log(email, password, name, photo, confirmPassword);
      if (password !== confirmPassword) {
         setError("Password Didn't match");
         return;
      } else if (!/(?=.*[0-9])/.test(password)) {
         setError("please enter atleast two number");
         return;
      } else if (!/(?=.*[A-Z])/.test(password)) {
         setError("please enter atleast one uppercase letters");
         return;
      } else if (password.length < 6) {
         setError("Password must be at least 6 characters");
         return;
      }
      setError("");
      setSuccess("");
      createUser(email, password)
         .then((result) => {
            const createdUser = result.user;
            setError("");
            setSuccess("account successfully create");
            updateDetails(createdUser, name, photo);
            form.reset();
            console.log(createdUser);
         })
         .catch((err) => {
            setSuccess("");
            setError(err.message);
            console.log(err.message);
         });
   };
   // google login
   const loginWithGoogle = () => {
      googleLogin()
         .then((result) => {
            const loggedUser = result.user;
            navigate(from, { replace: true });
            setError("");
            setSuccess("login succesfully");
            console.log(loggedUser);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };
   // github login
   const loginWithGithub = () => {
      githubLogin()
         .then((result) => {
            const loggedUser = result.user;
            navigate(from, { replace: true });
            navigate(from, { replace: true });
            console.log(loggedUser);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   const updateDetails = (user, name, photo) => {
      updateProfile(user, {
         displayName: name,
         photoURL: photo,
      })
         .then(() => {
            console.log("update profile");
         })
         .catch((error) => {
            console.log(error.message);
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
               <Typewriter
                  options={{
                     strings: ["Please Register"],
                     autoStart: true,
                     loop: true,
                     delay: 80,
                     cursor: "_",
                     deleteSpeed: 20,
                  }}
               />
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
                        required
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
                        required
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
                     required
                  />
               </div>
               <div className="flex justify-between items-center space-x-2">
                  <div class="relative w-full">
                     <label
                        class="block text-gray-100 font-bold m-[4px]"
                        for="pass">
                        Enter Your Password
                     </label>
                     <input
                        class="appearance-none border rounded-r-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={control ? "text" : "password"}
                        name="passwordd"
                        placeholder="*********"
                     />
                     <div
                        onClick={() => {
                           setControl(!control);
                        }}
                        class="absolute inset-y-0 right-0 top-8 flex  items-center pr-3 cursor-pointer">
                        {control ? (
                           <FaEyeSlash class="text-gray-400 text-[23px]"></FaEyeSlash>
                        ) : (
                           <FaEye class="text-gray-400 text-[23px]"></FaEye>
                        )}
                     </div>
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
                        required
                     />
                  </div>
               </div>
               <div className="py-[6px]">
                  <p className="text-red-500">{error}</p>
                  <p className="text-green-400 ">{success}</p>
               </div>
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
                        onClick={loginWithGithub}
                        type="button"
                        className="bg-white rounded-full border-gray-400 border-2 p-2 mr-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <FaGithub className="text-gray-500" />
                     </button>
                     <button
                        onClick={loginWithGoogle}
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
