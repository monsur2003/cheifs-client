import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const Blogs = () => {
   return (
      <div className="w-[90%] mt-28 relative z-0 mx-auto">
         <div>
            <h1 className="text-center underline text-6xl text-gray-500">
               QNA Question
            </h1>
         </div>
         <div className="border border-blue-400">
            <h3 className="font-bold text-2xl flex items-center gap-2">
               <FaHandPointRight></FaHandPointRight> Tell us the differences
               between uncontrolled and controlled components.
            </h3>
            <p>
               <q className="font-bold">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Amet, corrupti cupiditate iste optio quo inventore officiis
                  possimus laudantium earum commodi veritatis iusto praesentium
                  quaerat accusamus animi nesciunt placeat architecto voluptatem
                  fugit nisi minima. Quod iste culpa cumque ipsum debitis!
               </q>
            </p>
         </div>
      </div>
   );
};

export default Blogs;
