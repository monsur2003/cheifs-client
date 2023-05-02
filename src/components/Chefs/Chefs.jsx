import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChef from "../SingleChef/SingleChef";

const Chefs = () => {
   const allChefs = useLoaderData();
   console.log(allChefs);
   return (
      <div>
         <h2>this is chefs page length {allChefs.length} </h2>

         <div className="w-[80%] mx-auto  grid md:grid-cols-2 space-x-3 space-y-3 items-center">
            {allChefs.map((chef) => (
               <SingleChef key={chef.id} chef={chef}></SingleChef>
            ))}
         </div>
      </div>
   );
};

export default Chefs;
