import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const { user, logOutuser } = useContext(AuthContext);
   // const { displayName, photoURL } = user;
   console.log("header", user);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   const handleLogOut = () => {
      logOutuser();
   };

   return (
      <>
         {/* <nav className="fixed md:flex p-5 justify-between items-center text-blue-400 top-0 left-0 right-0 z-20 bg-[#1b1b4e81]">
            <p className="company text-gray-300 text-4xl font-semibold">
               <span className="text-5xl font-serif text-blue-700">F</span>
               oodie
            </p>
            <div className="hidden md:flex items-center gap-x-3 md:gap-x-6">
               <ActiveLink to="/">Home</ActiveLink>
               <ActiveLink to="/login"> Login</ActiveLink>
               <ActiveLink to="/blog">Blogs</ActiveLink>
            </div>

           
            <div className="block md:hidden">
               <button
                  onClick={toggleMenu}
                  className="flex items-center px-3 py-2">
                  {menuOpen ? (
                     <FaTimes className="text-2xl text-white"></FaTimes>
                  ) : (
                     <FaBars className="text-2xl text-white"></FaBars>
                  )}
               </button>
            </div>
         </nav>
         {menuOpen && (
            <div className="fixed top-0 left-50 right-0 h-[80px] bottom-0 z-50 bg-[#3737b1e7] flex flex-col items-center pt-28">
               <ActiveLink
                  onClick={toggleMenu}
                  to="/"
                  className="text-2xl text-white mb-4">
                  Home
               </ActiveLink>
               <ActiveLink
                  onClick={toggleMenu}
                  to="/login"
                  className="text-2xl text-white mb-4">
                  Login
               </ActiveLink>
               <ActiveLink
                  onClick={toggleMenu}
                  to="/blog"
                  className="text-2xl text-white mb-4">
                  Blogs
               </ActiveLink>
            </div>
         )} */}

         <nav className="bg-[#a5b2ff23] border-b border-blue-600 text-blue-500 fixed left-0 right-0 top-0 z-40">
            <div className="my-0 md:flex items-center w-[80%] py-7 mx-auto justify-between">
               <h2 className="text-[35px] text-gray-200 font-bold">
                  {" "}
                  <span className="text-blue-700 text-[40px]">F</span>oodie
               </h2>
               <div
                  className="md:hidden flex justify-end items-center"
                  onClick={() => setMenuOpen(!menuOpen)}>
                  <span>
                     {menuOpen === true ? (
                        <FaBars className="h-6 w-6 text-blue-500" />
                     ) : (
                        <FaTimes className="h-6 w-6 text-blue-500" />
                     )}
                  </span>
               </div>
               <div
                  className={`${
                     menuOpen ? "block duration-1000" : "hidden"
                  } md:flex md:items-center md:w-auto`}>
                  <div className="text-sm md:flex-grow">
                     <Link
                        to="/"
                        className="block font-semibold mt-4 md:inline-block md:mt-0 text-blue-500 hover:text-blue-800 hover:bg-slate-400 p-1 mr-4">
                        Home
                     </Link>
                     <Link className="block font-semibold mt-4 md:inline-block md:mt-0 text-blue-500 hover:text-blue-800 hover:bg-slate-400 p-1 mr-4">
                        About us
                     </Link>
                     <Link
                        to="/blog"
                        className="block mt-4 font-semibold md:inline-block md:mt-0 hover:text-blue-800 hover:bg-slate-400 p-1 mr-4">
                        Blog
                     </Link>
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
