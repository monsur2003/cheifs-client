import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Review = ({ rev }) => {
   console.log(rev);
   const { image, rating, review } = rev;

   return (
      <div>
         <div className="card text-gray-200 w-96 bg-[#1616d68a] shadow-xl">
            <figure>
               <LazyLoadImage effect="blur" src={image} alt="" />
            </figure>
            <div className="card-body">
               <div className="flex items-center justify-center gap-x-2 ">
                  <Rating
                     className="text-2xl text-yellow-400 "
                     readonly
                     placeholderRating={rating}
                     emptySymbol={<FaRegStar></FaRegStar>}
                     placeholderSymbol={<FaStar></FaStar>}
                     fullSymbol={<FaStar></FaStar>}></Rating>
                  <p className="text-[20px] font-semibold">{rating}</p>
               </div>
               <p className="pt-3">
                  {review.length < 120 ? review : review.slice(0, 120)}
               </p>
               <div className="card-actions justify-end"></div>
            </div>
         </div>
      </div>
   );
};

export default Review;
