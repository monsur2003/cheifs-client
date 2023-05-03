import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Recipe = ({ recipe }) => {
   console.log(recipe);
   const { name, ingredients, cookingMethod, rating } = recipe;

   const [buttonDisabled, setButtonDisabled] = useState(false);
   const handleFavourite = () => {
      // toast("Successfully Add to Favourite");
      setButtonDisabled(true);
   };
   return (
      <div className="mt-9">
         <div className="card w-[400px] h-[600px] border border-red-300 p-5">
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
            <div className="flex mt-3 border-t-2 items-center gap-x-5">
               <div className="">
                  <Rating
                     initialRating={rating}
                     placeholderRating={rating}
                     emptySymbol={<FaRegStar></FaRegStar>}
                     placeholderSymbol={<FaStar></FaStar>}
                     fullSymbol={<FaStar></FaStar>}
                     readOnly
                  />
               </div>

               <div>
                  <button
                     onClick={handleFavourite}
                     disabled={buttonDisabled}
                     className="w-[160px]  h-10 mt-3 bg-blue-700 text-gray-300   text-[18px] hover:bg-blue-900">
                     Add to favourite
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Recipe;
