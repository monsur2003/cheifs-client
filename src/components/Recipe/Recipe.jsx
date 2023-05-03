import React from "react";
import { Rating } from "@smastrom/react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Recipe = ({ recipe }) => {
   console.log(recipe);
   const { name, ingredients, cookingMethod, rating } = recipe;
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
            <div>
               <Rating
                  initialRating={3}
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                  readOnly
               />
            </div>
         </div>
      </div>
   );
};

export default Recipe;
