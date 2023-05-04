import React, { useState } from "react";

import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";

const Recipe = ({ recipe }) => {
   console.log(recipe);
   const { name, ingredients, cookingMethod, rating } = recipe;

   const [buttonDisabled, setButtonDisabled] = useState(false);
   const handleFavourite = () => {
      toast("Successfully Add to Favourite");
      setButtonDisabled(true);
   };
   return (
      <div className="mt-9">
         <div className="card w-[400px] h-[600px] bg-[#12154293] border border-red-300 p-5">
            <div className="recipe-name">
               <h2 className="font-bold text-2xl text-center underline">
                  {name}
               </h2>
            </div>
            <div>
               <h4 className="text-center border-b-2 pt-5 font-semibold border-blue-900 pb-2">
                  Ingredients
               </h4>
               <ul className="list-disc mb-4 pl-8 grid items-center justify-center w-full mx-auto grid-cols-2">
                  {ingredients.map((ind) => (
                     <li className="">{ind}</li>
                  ))}
               </ul>
            </div>
            <div className="method">
               <h4 className="text-center pt-5 font-semibold  border-b-2 border-blue-900 pb-2">
                  Cooking method
               </h4>
               <p className="py-2">
                  {cookingMethod < 260
                     ? cookingMethod
                     : cookingMethod.slice(0, 260)}
               </p>
            </div>

            <div className="flex justify-center items-center font-semibold text-2xl gap-x-2 border-t border-blue-300 mt-3 pt-2 w-full">
               <Rating
                  readonly
                  className="text-3xl text-yellow-500  space-x-4"
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}></Rating>
               <p>{rating}</p>
            </div>

            <div className="flex justify-center items-center pt-5">
               <button
                  onClick={handleFavourite}
                  disabled={buttonDisabled}
                  className="btn rounded-none btn-secondary">
                  Add to favourite
               </button>
            </div>
         </div>
      </div>
   );
};

export default Recipe;
