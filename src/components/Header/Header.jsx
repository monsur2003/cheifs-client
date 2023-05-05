import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const { user, logOutuser } = useContext(AuthContext);

   console.log("header", user);

   const handleLogOut = () => {
      logOutuser();
   };

   return (
      <>
         <nav className="border-b bg-[#1b0539e6] relative border-blue-600 text-white font-semibold   ">
            <div className="my-0 md:flex items-center w-[80%] py-5 mx-auto justify-between">
               <h2 className="text-[35px] text-gray-200 font-bold">
                  {" "}
                  <span className="text-blue-700 text-[40px]">F</span>oodie
               </h2>

               <div
                  className="md:hidden flex justify-end items-center"
                  onClick={() => setMenuOpen(!menuOpen)}>
                  <span>
                     {menuOpen === true ? (
                        <FaTimes className="h-6 w-6 text-blue-500" />
                     ) : (
                        <FaBars className="h-6 w-6 text-blue-500" />
                     )}
                  </span>
               </div>
               <div
                  className={`${
                     menuOpen ? "block duration-1000" : "hidden"
                  } md:flex md:items-center md:w-auto`}>
                  <div className="text-sm md:flex-grow">
                     <div className="flex z-50 gap-x-3">
                        <ActiveLink
                           to="/"
                           className="block  font-semibold mt-4 md:inline-block md:mt-0 text-blue-500 hover:text-blue-800 hover:bg-slate-400 p-1 mr-4">
                           Home
                        </ActiveLink>
                        <ActiveLink
                           to="/About"
                           className="block font-semibold mt-4 md:inline-block md:mt-0 text-blue-500 hover:text-blue-800 hover:bg-slate-400 p-1 mr-4">
                           About us
                        </ActiveLink>

                        <ActiveLink
                           to="/blog"
                           className="block mt-4 font-semibold md:inline-block md:mt-0 hover:text-blue-800 hover:bg-slate-400 p-1 mr-4">
                           Blog
                        </ActiveLink>
                     </div>
                  </div>
               </div>
               <div>
                  {user ? (
                     <div className="flex items-center gap-3">
                        <div className="tooltip" data-tip={user?.displayName}>
                           <img
                              className="w-[50px] h-[50px] rounded-full"
                              src={user?.photoURL}
                              alt=""
                           />
                        </div>
                        <button
                           onClick={handleLogOut}
                           className="bg-gray-400 text-black py-2 px-4 rounded-md">
                           Sign Out
                        </button>
                     </div>
                  ) : (
                     <div className="flex items-center gap-x-3">
                        <FaUserCircle className="text-4xl"></FaUserCircle>
                        <Link to="/login">
                           <button className="bg-gray-400 text-black py-2 px-4 rounded-md">
                              Login
                           </button>
                        </Link>
                     </div>
                  )}
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
