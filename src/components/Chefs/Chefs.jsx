import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChef from "../SingleChef/SingleChef";

const Chefs = () => {
   const allChefs = useLoaderData();
   // console.log(allChefs);
   return (
      <div>
         <h2>this is chefs page length {allChefs.length} </h2>

         <div className="">
            <div className="">
               <h2 className="text-center text-gray-300 text-6xl mt-4">
                  Our Master Chefs
               </h2>
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
