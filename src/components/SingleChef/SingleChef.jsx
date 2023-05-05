import React from "react";
import { FaConciergeBell, FaGratipay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SingleChef = ({ chef }) => {
   // console.log(chef);
   const { name, id, image, yearsExperience, numRecipes, likes } = chef;
   return (
      <div className="card flex my-3 md:flex-row flex-col md:w-full w-[90%] mx-auto md:h-[220px] h-[100] md:rounded-none rounded-md card-side items-center md:bg-[#a8a8c2ea] bg-white md:shadow-none shadow-lg shadow-base-400">
         <figure>
            <LazyLoadImage
               effect="blur"
               className="md:w-[270px] w-full  h-[180]  md:h-[220px]"
               src={image}
               alt=""
            />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Experience of year: {yearsExperience}</p>
            <p>Recipes: {yearsExperience}</p>
            <div>
               <p className="flex items-center gap-1">
                  Likes: <FaGratipay className="text-red-500"></FaGratipay>{" "}
                  {likes}
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
