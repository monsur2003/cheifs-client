import React from "react";
import { FaConciergeBell, FaGratipay, FaReceipt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleChef = ({ chef }) => {
   // console.log(chef);
   const { name, id, image, yearsExperience, numRecipes, likes } = chef;
   return (
      <div className="card h-[220px] rounded-none card-side items-center bg-[#a8a8c2ea] shadow-md">
         <figure>
            <img className="w-[270px] h-[220px]" src={image} alt="" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Experience of year: {yearsExperience}</p>
            <p>Recipes: {yearsExperience}</p>
            <div>
               <p className="flex items-center gap-1">
                  Likes: <FaGratipay className="text-red-500"></FaGratipay>{" "}
                  {yearsExperience}
               </p>
               <div className="card-actions justify-end mt-5">
                  <div className="bg-[#1e2b46]  text-gray-300 p-1  hover:text-[#1e2b46] hover:bg-blue-300 hover:transition delay-200 ">
                     <Link
                        to={`/details/${id}`}
                        className="flex items-center gap-[6px] ">
                        View recipe <FaConciergeBell></FaConciergeBell>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleChef;
