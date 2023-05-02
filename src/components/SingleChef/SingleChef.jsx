import React from "react";
import { FaGratipay } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleChef = ({ chef }) => {
   console.log(chef);
   const { name, id, image, yearsExperience, numRecipes, likes } = chef;
   return (
      <div className=" flex-col md:flex md:flex-row gap-x-3 w-[500px] h-[200px]  bg-white rounded-lg border border-gray-600 ">
         <img
            className="md:w-[260px] w-fit h-[180px] md:h-[200px]"
            src={image}
            alt=""
         />
         <div>
            <h2 className="text-2xl text-yellow-50">{name}</h2>
            <p>Experience: {yearsExperience}</p>
            <p>Recipe: {numRecipes}</p>
            <p className="flex items-center gap-1">
               Likes: <FaGratipay className="ml-1"></FaGratipay>
               {likes}
            </p>
            <Link className="btn" to={`/details/${id}`}>
               View recipe
            </Link>
         </div>
      </div>
   );
};

export default SingleChef;
