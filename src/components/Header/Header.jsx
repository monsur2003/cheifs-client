import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
   return (
      <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between bg-[#070d3093] p-6">
         <div className="flex items-center text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
               Company Name
            </span>
         </div>
         <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
               <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
               </svg>
            </button>
         </div>
         <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
               <Link
                  to="/"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                  Home
               </Link>
               <ActiveLink
                  to="/login"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                  Login
               </ActiveLink>
               <ActiveLink
                  to="/blog"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">
                  Blogs
               </ActiveLink>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
