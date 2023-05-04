import React from "react";
import { FaGratipay } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
// import bg from "../../assets/banner3.jpg";
import video from "../../assets/videoplayback (2).mp4";
import Recipe from "../Recipe/Recipe";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefRecfipe = () => {
   const { id } = useParams();
   const allRecipes = useLoaderData();
   const singleRecipes = allRecipes.find((recipes) => recipes.id == id);

   const { name, image, recipes, yearsExperience, numRecipes, bio, likes } =
      singleRecipes;
   return (
      <>
         <div className="relative">
            {/* Video */}
            <video
               className=" w-full h-[100vh] z-[-1] object-cover"
               src={video}
               autoPlay
               muted
               loop></video>
            {/* Overlay */}
            <div className=" absolute inset-0 bg-[#000000cc]"></div>
            {/* Text */}
            <div className=" pt-36 absolute w-full flex justify-center flex-col items-center  top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2   z-10 max-w-7xl  px-4 sm:px-6 lg:px-8">
               <div className="pt-[80px] mx-auto w-full">
                  <div className="w-full flex bg-[#291b4b9a] rounded-none lg:card-side  shadow-xl">
                     <figure>
                        <LazyLoadImage
                           className=" object-cover"
                           src={image}
                           alt="Album"
                        />
                     </figure>
                     <div className="body-card p-6">
                        <h2 className="text-2xl text-gray-100 font-bold mb-3 text-center">
                           {name}
                        </h2>

                        <p className="border-b-2 text-gray-300 border-t-2 text-[18px] font-semibold border-gray-300 p-2">
                           {bio}
                        </p>

                        <p className="flex mt-4 text-gray-200 text-[18px] font-semibold gap-1 items-center">
                           Likes:{" "}
                           <FaGratipay className="text-red-500 text-[16px] ml-2"></FaGratipay>
                           <span className="font-semibold text-[16px]">
                              {likes}
                           </span>
                        </p>
                        <p className="text-[18px] text-gray-200 font-semibold">
                           Recipes:{" "}
                           <span className="text-[16px] ml-2">
                              {numRecipes}
                           </span>
                        </p>
                        <p className="text-[18px] text-gray-200 font-semibold">
                           Experience:{" "}
                           <span className="text-[16px] ml-2">
                              {yearsExperience}
                           </span>
                        </p>
                     </div>
                  </div>
               </div>

               {/* second card */}

               {/* card end */}
            </div>
         </div>
         <div className="flex bg-blue-900 p-10 items-center justify-center flex-col mt-8 mb-4">
            <h2 className="text-gray-200 text-4xl font-bold font-poppins">
               Recipes by Category
            </h2>
            <p className="text-gray-400 mt-2">
               From Our Kitchen to Your Table: Discover Mouthwatering Recipes
               for Every Occasion
            </p>

            <div className="text-gray-200 grid md:grid-cols-3  mx-auto gap-3">
               {recipes.map((recipe) => (
                  <Recipe key={recipe.id} recipe={recipe}></Recipe>
               ))}
            </div>
         </div>
      </>
   );
};

export default ChefRecfipe;

{
   /* <div
   //  className=""
   className="min-h-screen   flex items-center justify-center bg-cover"
   style={{
      backgroundImage: `url(${bg})`,
      backgroundColor: "#0311418e",
      backgroundBlendMode: "overlay",
   }}> */
}

// </div>;
