import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChef from "../SingleChef/SingleChef";
import Typewriter from "typewriter-effect";

const Chefs = () => {
   const allChefs = useLoaderData();
   // console.log(allChefs);
   return (
      <div>
         <div className="">
            <div className="">
               <h2 className="text-center text-gray-300 text-6xl mt-4">
                  Our Master Chefs
               </h2>
               <p className="text-blue-400 text-center mt-3  text-[20px]">
                  <Typewriter
                     options={{
                        strings: [
                           "Cooking is an art and I am the master chef who creates masterpieces.",
                           "The secret to great cooking is passion, precision, and creativity. I bring all three to every dish I create.",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        cursor: "_",
                        deleteSpeed: 30,
                     }}
                  />
               </p>
            </div>
            <div className="w-[80%] mt-8 mx-auto grid md:grid-cols-2 gap-5 ">
               {allChefs.map((chef) => (
                  <SingleChef key={chef.id} chef={chef}></SingleChef>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Chefs;
